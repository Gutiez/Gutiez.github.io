<?php
// Benchmark 5K — guarda un lead. Acepta un formulario normal o JSON (para agentes de IA).
// Los leads se guardan en data/leads.csv.php: la primera línea impide leerlo desde la web
// y data/.htaccess bloquea además toda la carpeta.
header('Content-Type: application/json; charset=utf-8');

function out(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    out(405, ['ok' => false, 'error' => 'Use POST. See /llms.txt for the fields.']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$in = stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false
    ? (json_decode($raw, true) ?: [])
    : $_POST;

$field = function (string $k, int $max) use ($in): string {
    $v = is_string($in[$k] ?? null) ? $in[$k] : '';
    $v = trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $v) ?? '');
    $v = mb_substr($v, 0, $max);
    // Evita que una hoja de cálculo interprete el valor como fórmula.
    return preg_match('/^[=+\-@]/', $v) ? "'" . $v : $v;
};

if ($field('website', 200) !== '') {            // campo trampa para bots de spam
    out(200, ['ok' => true]);
}

$email = filter_var(trim((string)($in['email'] ?? '')), FILTER_VALIDATE_EMAIL);
if (!$email || strlen($email) > 200) {
    out(422, ['ok' => false, 'error' => 'A valid "email" is required.']);
}
if (empty($in['consent']) || $in['consent'] === 'false') {
    out(422, ['ok' => false, 'error' => '"consent" must be true: we need permission to contact you.']);
}
$kinds = ['company', 'agent', 'other'];
$kind = in_array($in['kind'] ?? '', $kinds, true) ? $in['kind'] : 'other';

$file = __DIR__ . '/data/leads.csv.php';
$new = !file_exists($file);
$fh = @fopen($file, 'a');
if (!$fh || !flock($fh, LOCK_EX)) {
    out(500, ['ok' => false, 'error' => 'Could not save. Please try again later.']);
}
if ($new) {
    fwrite($fh, "<?php exit; ?>\n");
    fputcsv($fh, ['date_utc', 'kind', 'email', 'name', 'model', 'message', 'lang']);
}
fputcsv($fh, [gmdate('Y-m-d H:i:s'), $kind, $email, $field('name', 150), $field('model', 150), $field('message', 1000), $field('lang', 5)]);
flock($fh, LOCK_UN);
fclose($fh);

out(200, ['ok' => true, 'message' => 'Registered. We will contact you at the email provided.']);
