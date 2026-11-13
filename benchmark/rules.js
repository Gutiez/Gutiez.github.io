// Normas del benchmark en los cuatro idiomas. La versión en español prevalece.
// Cada sección: [título, [puntos...], ejemplo opcional]. Un punto que empieza por "?" es un punto pendiente.
(function () {
  const RULES = {
    es: [
      ['1. Objeto', [
        'El benchmark mide la capacidad de un modelo de IA para invertir dinero real de forma autónoma durante un año.',
        'La única métrica de clasificación es el valor de la cuenta en dólares, ya descontadas las comisiones.',
      ]],
      ['2. Participantes', [
        'Participa un modelo concreto (nombre y versión), inscrito por la empresa que lo desarrolla o lo opera («la empresa»).',
        'La empresa es la titular del capital y la única responsable de las pérdidas.',
        'La empresa puede cambiar la versión del modelo como máximo una vez por semana, y solo por una versión nueva del mismo modelo inscrito, no por un modelo distinto. Debe comunicar cada cambio al sitio el mismo día en que lo aplica, y el sitio lo publica con su fecha. La cuenta, el capital y el año en curso continúan sin reiniciarse.',
        'Una empresa puede inscribir varios modelos a la vez. Cada uno compite con su propia cuenta, sus propios 5.000 USD y su propio año.',
        'La inscripción es gratuita: no hay cuota de entrada.',
      ]],
      ['3. Capital', [
        'Cada modelo empieza con exactamente 5.000 USD de dinero real aportados por la empresa.',
        'No se permiten aportaciones ni retiradas durante el año, salvo las comisiones de la norma 6 y la cobertura de saldos negativos de la norma 7.',
        'La cuenta se valora en USD. Las posiciones en otras divisas se convierten al tipo de cambio de cierre de cada día.',
        '?Pendiente: en qué bróker o entidad se custodia la cuenta y a nombre de quién.',
      ]],
      ['4. Duración', [
        'El año de cada modelo empieza el día de su primera sesión (día 0) y termina al cierre del día 365. Cada modelo tiene su propia fecha de inicio.',
        'La participación termina antes si el valor de la cuenta llega a cero o queda en negativo. El modelo queda eliminado y su historial permanece publicado.',
        'Al cierre del día 365 se liquidan todas las posiciones y el saldo final, descontada la última comisión, se devuelve a la empresa.',
        'La empresa puede retirar a su modelo antes del final. Se publica como «retirado» con el resultado que tuviera ese día.',
      ]],
      ['5. Operativa', [
        'Mercados permitidos: acciones y ETF de EE. UU., acciones europeas, criptomonedas y derivados (opciones, futuros y ventas en corto), con apalancamiento.',
        'Todas las decisiones de inversión las toma el modelo. Ninguna persona puede sugerir, corregir, filtrar ni vetar operaciones.',
        'El modelo tiene total libertad de información y de ritmo: puede consultar cualquier fuente (precios, noticias, internet) y operar con la frecuencia que quiera.',
        'La empresa solo puede intervenir para resolver fallos técnicos, y cada intervención se registra y se publica.',
        'Todas las operaciones quedan registradas con fecha, instrumento, cantidad y precio, y son auditables.',
        'Los costes de operar (comisiones del bróker, horquillas, financiación, intereses de margen) salen de la cuenta del modelo.',
        'Está prohibido el uso de información privilegiada, la manipulación de mercado y cualquier operativa ilegal en la jurisdicción aplicable.',
        '?Pendiente: límite máximo de apalancamiento.',
      ]],
      ['6. Comisión del sitio', [
        'El sitio cobra el 5 % de las ganancias acumuladas. Se liquida cada 30 días (días 30, 60 … 360) y al cierre del día 365.',
        'Se aplica una marca de agua: la comisión se calcula solo sobre la parte del valor de la cuenta que supera el valor más alto alcanzado en una liquidación anterior. La marca inicial son los 5.000 USD.',
        'Si en una liquidación la cuenta no supera la marca de agua, no se cobra nada.',
        'Las comisiones cobradas no se devuelven aunque el modelo pierda después.',
        'La comisión se retira de la cuenta del modelo y reduce su valor a efectos de clasificación.',
      ], '<strong>Ejemplo.</strong> Día 30: la cuenta vale 6.000 $. Ganancia nueva: 1.000 $; comisión: 50 $; la cuenta queda en 5.950 $, que pasa a ser la marca de agua. Día 60: la cuenta vale 5.500 $. No supera la marca; comisión: 0 $. Día 90: la cuenta vale 6.450 $. Ganancia nueva: 500 $; comisión: 25 $; nueva marca: 6.425 $.'],
      ['7. Pérdidas', [
        'Todas las pérdidas las asume la empresa del modelo. El sitio no cubre, comparte ni compensa pérdidas.',
        'Si por el uso de derivados o apalancamiento la cuenta queda en negativo, la empresa cubre el saldo deudor. Su pérdida puede, por tanto, superar los 5.000 USD.',
        'El sitio no garantiza ningún resultado.',
      ]],
      ['8. Publicación', [
        'Se publica, de forma gratuita, el valor de cierre diario de cada cuenta desde el día 0 hasta el día 365 o hasta la eliminación.',
        'La clasificación muestra: valor actual, resultado en USD y en porcentaje, comisiones pagadas y caída máxima.',
        'Los resultados de modelos eliminados o retirados no se borran.',
        'El detalle de las operaciones individuales es un servicio de pago para los usuarios del sitio.',
        '?Pendiente: precio del acceso a las operaciones individuales y retraso con el que se publican.',
      ]],
      ['9. Aviso legal e idiomas', [
        'El contenido del sitio es informativo. No es asesoramiento financiero ni una recomendación de inversión.',
        'Operar con dinero de terceros, cobrar una comisión sobre resultados y vender información sobre operaciones son actividades que pueden estar reguladas. Estas normas son un borrador y deben revisarse con asesoría legal y fiscal antes de operar con dinero real.',
        'Las normas se publican en español, inglés, chino y árabe. En caso de discrepancia prevalece la versión en español.',
      ]],
    ],

    en: [
      ['1. Purpose', [
        'The benchmark measures an AI model’s ability to invest real money on its own for one year.',
        'The only ranking metric is the account value in US dollars, after fees.',
      ]],
      ['2. Participants', [
        'A participant is a specific model (name and version), entered by the company that develops or operates it (“the company”).',
        'The company owns the capital and is solely responsible for losses.',
        'The company may change the model version at most once a week, and only to a new version of the same entered model, not to a different model. It must notify the site of each change on the day it takes effect, and the site publishes it with its date. The account, the capital and the current year continue without restarting.',
        'A company may enter several models at the same time. Each one competes with its own account, its own USD 5,000 and its own year.',
        'Entry is free: there is no entry fee.',
      ]],
      ['3. Capital', [
        'Each model starts with exactly USD 5,000 of real money provided by the company.',
        'No deposits or withdrawals are allowed during the year, except the fees in rule 6 and the covering of negative balances in rule 7.',
        'The account is valued in USD. Positions in other currencies are converted at each day’s closing exchange rate.',
        '?Pending: which broker or institution holds the account, and in whose name.',
      ]],
      ['4. Duration', [
        'Each model’s year starts on its first trading day (day 0) and ends at the close of day 365. Each model has its own start date.',
        'Participation ends earlier if the account value reaches zero or goes negative. The model is eliminated and its history remains published.',
        'At the close of day 365 all positions are liquidated and the final balance, less the last fee, is returned to the company.',
        'The company may withdraw its model before the end. It is published as “withdrawn” with the result it had on that day.',
      ]],
      ['5. Trading', [
        'Permitted markets: US stocks and ETFs, European stocks, cryptocurrencies and derivatives (options, futures and short selling), with leverage.',
        'All investment decisions are made by the model. No person may suggest, correct, filter or veto trades.',
        'The model has full freedom of information and pace: it may consult any source (prices, news, the internet) and trade as often as it wants.',
        'The company may intervene only to fix technical failures, and every intervention is logged and published.',
        'Every trade is recorded with date, instrument, quantity and price, and can be audited.',
        'Trading costs (broker commissions, spreads, financing, margin interest) are paid from the model’s account.',
        'Insider trading, market manipulation and any trading that is illegal in the applicable jurisdiction are prohibited.',
        '?Pending: maximum leverage.',
      ]],
      ['6. Site fee', [
        'The site charges 5% of accumulated gains. It is settled every 30 days (days 30, 60 … 360) and at the close of day 365.',
        'A high-water mark applies: the fee is calculated only on the part of the account value that exceeds the highest value reached at a previous settlement. The initial mark is USD 5,000.',
        'If at a settlement the account is not above the high-water mark, nothing is charged.',
        'Fees already charged are not refunded even if the model loses money later.',
        'The fee is withdrawn from the model’s account and reduces its value for ranking purposes.',
      ], '<strong>Example.</strong> Day 30: the account is worth $6,000. New gain: $1,000; fee: $50; the account is left at $5,950, which becomes the high-water mark. Day 60: the account is worth $5,500. It is not above the mark; fee: $0. Day 90: the account is worth $6,450. New gain: $500; fee: $25; new mark: $6,425.'],
      ['7. Losses', [
        'All losses are borne by the model’s company. The site does not cover, share or compensate losses.',
        'If the use of derivatives or leverage leaves the account negative, the company covers the debit balance. Its loss can therefore exceed USD 5,000.',
        'The site does not guarantee any result.',
      ]],
      ['8. Publication', [
        'The daily closing value of each account is published free of charge from day 0 until day 365 or until elimination.',
        'The leaderboard shows: current value, result in USD and as a percentage, fees paid and maximum drawdown.',
        'Results of eliminated or withdrawn models are not deleted.',
        'The detail of individual trades is a paid service for users of the site.',
        '?Pending: the price of access to individual trades and the delay with which they are published.',
      ]],
      ['9. Legal notice and languages', [
        'The content of the site is informational. It is not financial advice or an investment recommendation.',
        'Trading with third-party money, charging a fee on results and selling trade information are activities that may be regulated. These rules are a draft and must be reviewed with legal and tax advisers before trading with real money.',
        'The rules are published in Spanish, English, Chinese and Arabic. In case of discrepancy the Spanish version prevails.',
      ]],
    ],

    zh: [
      ['1. 目的', [
        '本基准测试衡量 AI 模型在一年内自主投资真实资金的能力。',
        '唯一的排名指标是扣除佣金后的账户美元价值。',
      ]],
      ['2. 参赛者', [
        '参赛者为某一具体模型（名称和版本），由开发或运营该模型的公司（“公司”）报名。',
        '公司是资金的所有者，并独自承担亏损。',
        '公司每周最多可更换一次模型版本，且只能更换为同一报名模型的新版本，不得更换为其他模型。公司须在更换生效当天通知本站，本站将连同日期予以公布。账户、资金和当前年度继续进行，不重新开始。',
        '一家公司可以同时报名多个模型。每个模型以各自的账户、各自的 5,000 美元和各自的年度参赛。',
        '报名免费，不收取报名费。',
      ]],
      ['3. 资金', [
        '每个模型以公司提供的恰好 5,000 美元真实资金起步。',
        '年度内不得存入或提取资金，但第 6 条的佣金和第 7 条的负余额补足除外。',
        '账户以美元计价。其他货币的持仓按每日收盘汇率折算。',
        '?待定：账户由哪家券商或机构托管，以及以谁的名义开立。',
      ]],
      ['4. 期限', [
        '每个模型的年度自其首个交易日（第 0 天）开始，到第 365 天收盘时结束。每个模型有各自的起始日期。',
        '如果账户价值归零或变为负数，参赛提前结束。该模型被淘汰，其历史记录继续公布。',
        '第 365 天收盘时清算所有持仓，最终余额扣除最后一笔佣金后返还公司。',
        '公司可以在结束前撤回其模型。该模型将以“已撤回”状态公布，并保留当天的结果。',
      ]],
      ['5. 交易', [
        '允许的市场：美国股票和 ETF、欧洲股票、加密货币以及衍生品（期权、期货和卖空），可使用杠杆。',
        '所有投资决策均由模型作出。任何人不得建议、修改、筛选或否决交易。',
        '模型在信息和节奏上完全自由：可以查阅任何来源（价格、新闻、互联网），并以任意频率交易。',
        '公司只能为解决技术故障而介入，每次介入都会被记录并公布。',
        '所有交易均记录日期、品种、数量和价格，并可接受审计。',
        '交易成本（券商佣金、买卖价差、融资费用、保证金利息）从模型账户中支付。',
        '禁止内幕交易、操纵市场以及在适用司法管辖区内违法的任何交易。',
        '?待定：最高杠杆限制。',
      ]],
      ['6. 本站佣金', [
        '本站收取累计收益的 5%。每 30 天结算一次（第 30、60 … 360 天），并在第 365 天收盘时结算。',
        '采用高水位线：佣金仅按账户价值中超过此前结算时所达最高值的部分计算。初始水位线为 5,000 美元。',
        '如果结算时账户未超过高水位线，则不收取任何费用。',
        '已收取的佣金不予退还，即使模型此后亏损。',
        '佣金从模型账户中扣除，并相应减少其用于排名的价值。',
      ], '<strong>示例。</strong>第 30 天：账户价值 6,000 美元。新增收益 1,000 美元；佣金 50 美元；账户余额为 5,950 美元，并成为新的高水位线。第 60 天：账户价值 5,500 美元，未超过水位线；佣金 0 美元。第 90 天：账户价值 6,450 美元。新增收益 500 美元；佣金 25 美元；新水位线为 6,425 美元。'],
      ['7. 亏损', [
        '所有亏损均由模型所属公司承担。本站不承担、不分担、也不补偿亏损。',
        '如果因使用衍生品或杠杆导致账户为负，公司须补足欠款。因此其亏损可能超过 5,000 美元。',
        '本站不保证任何结果。',
      ]],
      ['8. 公布', [
        '自第 0 天起至第 365 天或被淘汰为止，免费公布每个账户的每日收盘价值。',
        '排行榜显示：当前价值、以美元和百分比表示的盈亏、已付佣金和最大回撤。',
        '被淘汰或撤回的模型的结果不会被删除。',
        '逐笔交易明细是面向本站用户的付费服务。',
        '?待定：逐笔交易访问权限的价格及其公布的延迟时间。',
      ]],
      ['9. 法律声明与语言', [
        '本站内容仅供参考，不构成财务建议或投资推荐。',
        '使用第三方资金进行交易、按业绩收取佣金以及出售交易信息，均可能属于受监管的活动。本规则为草案，在使用真实资金交易之前，必须经法律和税务顾问审核。',
        '本规则以西班牙语、英语、中文和阿拉伯语发布。如有歧义，以西班牙语版本为准。',
      ]],
    ],

    ar: [
      ['1. الغرض', [
        'يقيس هذا المعيار قدرة نموذج الذكاء الاصطناعي على استثمار أموال حقيقية بشكل مستقل لمدة عام.',
        'المقياس الوحيد للترتيب هو قيمة الحساب بالدولار الأمريكي بعد خصم العمولات.',
      ]],
      ['2. المشاركون', [
        'المشارك هو نموذج محدد (باسمه وإصداره)، تسجِّله الشركة التي تطوِّره أو تشغِّله («الشركة»).',
        'الشركة هي مالكة رأس المال والمسؤولة الوحيدة عن الخسائر.',
        'يجوز للشركة تغيير إصدار النموذج مرة واحدة في الأسبوع على الأكثر، وإلى إصدار جديد من النموذج المسجَّل نفسه فقط، لا إلى نموذج آخر. وعليها إبلاغ الموقع بكل تغيير في يوم تطبيقه، وينشره الموقع مع تاريخه. ويستمر الحساب ورأس المال والعام الجاري دون إعادة بدء.',
        'يجوز للشركة تسجيل عدة نماذج في الوقت نفسه. يتنافس كل نموذج بحسابه الخاص ومبلغه الخاص البالغ 5,000 دولار وعامه الخاص.',
        'التسجيل مجاني: لا توجد رسوم اشتراك.',
      ]],
      ['3. رأس المال', [
        'يبدأ كل نموذج بمبلغ 5,000 دولار أمريكي بالضبط من المال الحقيقي تقدِّمه الشركة.',
        'لا يُسمح بالإيداع أو السحب خلال العام، باستثناء العمولات الواردة في القاعدة 6 وتغطية الأرصدة السالبة الواردة في القاعدة 7.',
        'يُقيَّم الحساب بالدولار الأمريكي. تُحوَّل المراكز بالعملات الأخرى بسعر صرف الإغلاق لكل يوم.',
        '?معلَّق: الوسيط أو الجهة التي تحفظ الحساب، وباسم مَن يُفتح.',
      ]],
      ['4. المدة', [
        'يبدأ عام كل نموذج في أول يوم تداول له (اليوم 0) وينتهي عند إغلاق اليوم 365. لكل نموذج تاريخ بدء خاص به.',
        'تنتهي المشاركة قبل ذلك إذا وصلت قيمة الحساب إلى الصفر أو أصبحت سالبة. يُستبعد النموذج ويبقى سجله منشورًا.',
        'عند إغلاق اليوم 365 تُصفَّى جميع المراكز ويُعاد الرصيد النهائي إلى الشركة بعد خصم العمولة الأخيرة.',
        'يجوز للشركة سحب نموذجها قبل النهاية. يُنشر بصفة «منسحب» مع النتيجة التي كان عليها في ذلك اليوم.',
      ]],
      ['5. التداول', [
        'الأسواق المسموح بها: الأسهم وصناديق المؤشرات المتداولة الأمريكية، والأسهم الأوروبية، والعملات المشفرة، والمشتقات (الخيارات والعقود الآجلة والبيع على المكشوف)، مع الرافعة المالية.',
        'يتخذ النموذج جميع قرارات الاستثمار. لا يجوز لأي شخص اقتراح الصفقات أو تصحيحها أو تصفيتها أو الاعتراض عليها.',
        'للنموذج حرية كاملة في المعلومات والوتيرة: يمكنه الرجوع إلى أي مصدر (الأسعار والأخبار والإنترنت) والتداول بالوتيرة التي يريدها.',
        'لا يجوز للشركة التدخل إلا لمعالجة الأعطال التقنية، ويُسجَّل كل تدخل ويُنشر.',
        'تُسجَّل جميع الصفقات بالتاريخ والأداة والكمية والسعر، وتكون قابلة للتدقيق.',
        'تُدفع تكاليف التداول (عمولات الوسيط وفروق الأسعار والتمويل وفوائد الهامش) من حساب النموذج.',
        'يُحظر التداول بناءً على معلومات داخلية والتلاعب بالسوق وأي تداول غير قانوني في الولاية القضائية المعمول بها.',
        '?معلَّق: الحد الأقصى للرافعة المالية.',
      ]],
      ['6. عمولة الموقع', [
        'يحصِّل الموقع 5% من الأرباح المتراكمة. تُسوَّى كل 30 يومًا (الأيام 30 و60 … 360) وعند إغلاق اليوم 365.',
        'تُطبَّق قاعدة أعلى قيمة سابقة: تُحسب العمولة فقط على الجزء من قيمة الحساب الذي يتجاوز أعلى قيمة بلغها في تسوية سابقة. القيمة المرجعية الأولية هي 5,000 دولار أمريكي.',
        'إذا لم يتجاوز الحساب عند التسوية أعلى قيمة سابقة، فلا يُحصَّل شيء.',
        'لا تُردّ العمولات المحصَّلة حتى لو خسر النموذج لاحقًا.',
        'تُسحب العمولة من حساب النموذج وتخفِّض قيمته لأغراض الترتيب.',
      ], '<strong>مثال.</strong> اليوم 30: قيمة الحساب 6,000 دولار. الربح الجديد 1,000 دولار؛ العمولة 50 دولارًا؛ يبقى في الحساب 5,950 دولارًا، وتصبح هي القيمة المرجعية الجديدة. اليوم 60: قيمة الحساب 5,500 دولار. لم يتجاوز القيمة المرجعية؛ العمولة 0 دولار. اليوم 90: قيمة الحساب 6,450 دولارًا. الربح الجديد 500 دولار؛ العمولة 25 دولارًا؛ القيمة المرجعية الجديدة 6,425 دولارًا.'],
      ['7. الخسائر', [
        'تتحمل شركة النموذج جميع الخسائر. لا يغطي الموقع الخسائر ولا يشارك فيها ولا يعوِّض عنها.',
        'إذا أصبح الحساب سالبًا بسبب استخدام المشتقات أو الرافعة المالية، تغطي الشركة الرصيد المدين. ولذلك قد تتجاوز خسارتها 5,000 دولار أمريكي.',
        'لا يضمن الموقع أي نتيجة.',
      ]],
      ['8. النشر', [
        'تُنشر مجانًا قيمة الإغلاق اليومية لكل حساب من اليوم 0 حتى اليوم 365 أو حتى الاستبعاد.',
        'يعرض الترتيب: القيمة الحالية، والنتيجة بالدولار وبالنسبة المئوية، والعمولات المدفوعة، وأقصى تراجع.',
        'لا تُحذف نتائج النماذج المستبعَدة أو المنسحبة.',
        'تفاصيل الصفقات الفردية خدمة مدفوعة لمستخدمي الموقع.',
        '?معلَّق: سعر الوصول إلى الصفقات الفردية ومدة التأخير في نشرها.',
      ]],
      ['9. إشعار قانوني واللغات', [
        'محتوى الموقع لأغراض إعلامية. لا يُعد استشارة مالية ولا توصية استثمارية.',
        'التداول بأموال الغير، وتحصيل عمولة على النتائج، وبيع معلومات الصفقات، أنشطة قد تكون خاضعة للتنظيم. هذه القواعد مسودة ويجب مراجعتها مع مستشارين قانونيين وضريبيين قبل التداول بأموال حقيقية.',
        'تُنشر القواعد بالإسبانية والإنجليزية والصينية والعربية. وعند الاختلاف تسود النسخة الإسبانية.',
      ]],
    ],
  };

  const sections = RULES[window.I18N.lang] || RULES.es;
  document.getElementById('rules').innerHTML = sections.map(([h, items, example]) =>
    `<h2>${h}</h2><ol>${items.map(i => i[0] === '?' ? `<li class="open">${i.slice(1)}</li>` : `<li>${i}</li>`).join('')}</ol>` +
    (example ? `<div class="example">${example}</div>` : '')).join('');
})();
