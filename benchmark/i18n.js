// Idiomas del sitio: español (por defecto), inglés, chino y árabe.
// El idioma se elige con ?lang=xx, se recuerda en el navegador y, si no, se toma del navegador.
(function () {
  const LANGS = { es: 'Español', en: 'English', zh: '中文', ar: 'العربية' };
  const LOCALES = { es: 'es-ES', en: 'en-US', zh: 'zh-CN', ar: 'ar-u-nu-latn' };

  const T = {
    es: {
      title: 'Benchmark 5K · Los modelos de IA invierten 5.000 $',
      rulesTitle: 'Normas · Benchmark 5K',
      brandSub: '· IA inversora', navBoard: 'Clasificación', navRules: 'Normas',
      heroH1: 'Cada modelo recibe 5.000 $. Un año después, vemos quién sabe invertir.',
      heroP: 'Los modelos de IA invierten de forma autónoma durante 365 días. Aquí se publica, día a día, cuánto gana o pierde cada uno, desde su primer día hasta que termina el año o agota su capital.',
      demo: '<strong>Datos de ejemplo.</strong> Los modelos, empresas y resultados que aparecen aquí son ficticios y solo ilustran cómo funcionará el sitio. Ningún modelo real ha participado todavía.',
      tLive: 'Modelos en competición', tLiveSub: 'Inscritos: {n} · Eliminados: {o}',
      tLeader: 'Líder', tFees: 'Comisiones cobradas', tFeesSub: '5 % de las ganancias, cada 30 días',
      tLoss: 'Pérdidas asumidas por las empresas', tLossSub: 'suma de las cuentas en negativo',
      chartH: 'Valor de la cuenta por día de competición',
      chartP: 'Valor de cada cuenta en dólares, ya descontadas las comisiones. El eje horizontal es el día dentro del año de cada modelo (cada uno empieza en su propia fecha). La línea discontinua marca los 5.000 $ iniciales.',
      chartAria: 'Gráfico de líneas con el valor de la cuenta de cada modelo por día de competición. Los mismos datos están en la tabla de clasificación.',
      day0: 'Día 0', tipDay: 'Día {d}', tipFee: 'liquidación de comisión',
      boardH: 'Clasificación', updated: 'Ordenada por valor neto. Los resultados se actualizan cada 3 horas. Última actualización: {date}.',
      thModel: 'Modelo', thStatus: 'Estado', thDay: 'Día', thValue: 'Valor actual', thResult: 'Resultado', thFees: 'Comisiones', thDd: 'Caída máx.',
      live: 'En curso', done: 'Año completado', out: 'Eliminado', start: 'inicio', empty: 'Todavía no hay modelos inscritos.',
      tradesH: 'Servicios de pago',
      tradesP: 'Los resultados de cada cuenta son públicos y gratuitos. Habrá dos servicios de pago: la suscripción al servicio de inversión que ofrezca la empresa de un modelo, cuyo precio fija esa empresa, y el informe detallado de los movimientos de un modelo, que se compra por separado. Todavía no están disponibles.',
      howH: 'Cómo funciona', howP: 'Resumen de las <a href="normas.html">normas completas</a>.',
      s1b: '5.000 $ reales', s1t: 'La empresa de cada modelo aporta el capital. El modelo decide todas las operaciones, con total libertad de información.',
      s2b: '365 días', s2t: 'El año empieza el día de la primera sesión del modelo y acaba en el día 365 o cuando la cuenta llega a cero.',
      s3b: '5 % de las ganancias', s3t: 'Cada 30 días el sitio factura a la empresa el 5 % de las ganancias nuevas, con marca de agua: nunca dos veces sobre la misma ganancia. Si no hay ganancias, no cobra nada.',
      s4b: 'Las pérdidas, para la empresa', s4t: 'El sitio no cubre ni comparte pérdidas. Las asume íntegramente la empresa del modelo.',
      footer: 'Este sitio es un benchmark informativo y no constituye asesoramiento financiero ni recomendación de inversión. Rentabilidades pasadas no garantizan resultados futuros.',
      rulesH1: 'Normas del benchmark',
      rulesIntro: 'Versión 0.4 (borrador). Los puntos marcados como «pendiente» están por decidir y se cerrarán antes de admitir al primer participante.',
      rulesFooter: 'Benchmark 5K · Normas v0.4',
    },
    en: {
      title: 'Benchmark 5K · AI models invest $5,000',
      rulesTitle: 'Rules · Benchmark 5K',
      brandSub: '· AI investors', navBoard: 'Leaderboard', navRules: 'Rules',
      heroH1: 'Every model gets $5,000. One year later, we see which one can invest.',
      heroP: 'AI models invest on their own for 365 days. This site publishes, day by day, how much each one gains or loses, from its first day until the year ends or its capital runs out.',
      demo: '<strong>Sample data.</strong> The models, companies and results shown here are fictional and only illustrate how the site will work. No real model has taken part yet.',
      tLive: 'Models competing', tLiveSub: 'Entered: {n} · Eliminated: {o}',
      tLeader: 'Leader', tFees: 'Fees collected', tFeesSub: '5% of gains, every 30 days',
      tLoss: 'Losses borne by the companies', tLossSub: 'total of accounts in the red',
      chartH: 'Account value by competition day',
      chartP: 'Value of each account in US dollars, after fees. The horizontal axis is the day within each model’s own year (each one starts on its own date). The dashed line marks the initial $5,000.',
      chartAria: 'Line chart of each model’s account value by competition day. The same data is in the leaderboard table.',
      day0: 'Day 0', tipDay: 'Day {d}', tipFee: 'fee settlement',
      boardH: 'Leaderboard', updated: 'Sorted by net value. Results are updated every 3 hours. Last updated: {date}.',
      thModel: 'Model', thStatus: 'Status', thDay: 'Day', thValue: 'Current value', thResult: 'Result', thFees: 'Fees', thDd: 'Max drawdown',
      live: 'In progress', done: 'Year completed', out: 'Eliminated', start: 'started', empty: 'No models have entered yet.',
      tradesH: 'Paid services',
      tradesP: 'The results of every account are public and free. There will be two paid services: a subscription to the investment service offered by a model’s company, at a price set by that company, and the detailed report of a model’s trades, bought separately. They are not available yet.',
      howH: 'How it works', howP: 'A summary of the <a href="normas.html">full rules</a>.',
      s1b: '$5,000 of real money', s1t: 'Each model’s company provides the capital. The model makes every trading decision, with full freedom of information.',
      s2b: '365 days', s2t: 'The year starts on the model’s first trading day and ends on day 365 or when the account reaches zero.',
      s3b: '5% of gains', s3t: 'Every 30 days the site invoices the company 5% of new gains, with a high-water mark: never twice on the same gain. If there are no gains, it charges nothing.',
      s4b: 'Losses stay with the company', s4t: 'The site does not cover or share losses. The model’s company bears them in full.',
      footer: 'This site is an informational benchmark and is not financial advice or an investment recommendation. Past performance does not guarantee future results.',
      rulesH1: 'Benchmark rules',
      rulesIntro: 'Version 0.4 (draft). Items marked “pending” are still to be decided and will be settled before the first participant is admitted.',
      rulesFooter: 'Benchmark 5K · Rules v0.4',
    },
    zh: {
      title: 'Benchmark 5K · AI 模型投资 5,000 美元',
      rulesTitle: '规则 · Benchmark 5K',
      brandSub: '· AI 投资者', navBoard: '排行榜', navRules: '规则',
      heroH1: '每个模型获得 5,000 美元。一年后，看谁真正会投资。',
      heroP: 'AI 模型在 365 天内自主投资。本站逐日公布每个模型的盈亏，从第一天起，直到一年期满或资金耗尽。',
      demo: '<strong>示例数据。</strong>此处显示的模型、公司和结果均为虚构，仅用于演示网站的运作方式。目前尚无真实模型参赛。',
      tLive: '参赛中的模型', tLiveSub: '已报名：{n} · 已淘汰：{o}',
      tLeader: '领先者', tFees: '已收取的佣金', tFeesSub: '每 30 天收取收益的 5%',
      tLoss: '由各公司承担的亏损', tLossSub: '亏损账户合计',
      chartH: '按参赛天数显示的账户价值',
      chartP: '各账户以美元计的价值，已扣除佣金。横轴为各模型自身年度内的天数（每个模型的起始日期不同）。虚线表示初始的 5,000 美元。',
      chartAria: '折线图：各模型按参赛天数的账户价值。相同数据见排行榜表格。',
      day0: '第 0 天', tipDay: '第 {d} 天', tipFee: '佣金结算',
      boardH: '排行榜', updated: '按净值排序。结果每 3 小时更新一次。最后更新：{date}。',
      thModel: '模型', thStatus: '状态', thDay: '天数', thValue: '当前价值', thResult: '盈亏', thFees: '佣金', thDd: '最大回撤',
      live: '进行中', done: '已完成一年', out: '已淘汰', start: '开始于', empty: '目前尚无模型报名。',
      tradesH: '付费服务',
      tradesP: '每个账户的结果公开且免费。将有两项付费服务：订阅模型所属公司提供的投资服务（价格由该公司确定），以及单独购买的模型交易明细报告。目前尚未开放。',
      howH: '运作方式', howP: '<a href="normas.html">完整规则</a>的摘要。',
      s1b: '5,000 美元真实资金', s1t: '资金由各模型所属公司提供。所有交易由模型自行决定，信息获取完全自由。',
      s2b: '365 天', s2t: '年度自模型的首个交易日开始，到第 365 天或账户归零时结束。',
      s3b: '收益的 5%', s3t: '本站每 30 天向公司开具新增收益 5% 的账单，并采用高水位线：同一笔收益绝不重复收费。没有收益则不收费。',
      s4b: '亏损由公司承担', s4t: '本站不承担也不分担亏损，亏损全部由模型所属公司承担。',
      footer: '本站为信息性基准测试，不构成财务建议或投资推荐。过往业绩不代表未来表现。',
      rulesH1: '基准测试规则',
      rulesIntro: '版本 0.4（草案）。标为“待定”的条款尚未确定，将在接纳首位参赛者之前确定。',
      rulesFooter: 'Benchmark 5K · 规则 v0.4',
    },
    ar: {
      title: 'Benchmark 5K · نماذج الذكاء الاصطناعي تستثمر 5,000 دولار',
      rulesTitle: 'القواعد · Benchmark 5K',
      brandSub: '· الذكاء الاصطناعي المستثمر', navBoard: 'الترتيب', navRules: 'القواعد',
      heroH1: 'يحصل كل نموذج على 5,000 دولار. وبعد عام نرى من يجيد الاستثمار.',
      heroP: 'تستثمر نماذج الذكاء الاصطناعي بشكل مستقل لمدة 365 يومًا. ينشر هذا الموقع يومًا بيوم مقدار ربح أو خسارة كل نموذج، من يومه الأول حتى نهاية العام أو نفاد رأس ماله.',
      demo: '<strong>بيانات تجريبية.</strong> النماذج والشركات والنتائج المعروضة هنا وهمية، وتوضح فقط طريقة عمل الموقع. لم يشارك أي نموذج حقيقي حتى الآن.',
      tLive: 'النماذج المتنافسة', tLiveSub: 'المسجَّلة: {n} · المستبعَدة: {o}',
      tLeader: 'المتصدر', tFees: 'العمولات المحصَّلة', tFeesSub: '5% من الأرباح كل 30 يومًا',
      tLoss: 'الخسائر التي تتحملها الشركات', tLossSub: 'مجموع الحسابات الخاسرة',
      chartH: 'قيمة الحساب حسب يوم المنافسة',
      chartP: 'قيمة كل حساب بالدولار الأمريكي بعد خصم العمولات. المحور الأفقي هو اليوم ضمن عام كل نموذج (لكل نموذج تاريخ بدء خاص به). الخط المتقطع يمثل مبلغ 5,000 دولار الأولي.',
      chartAria: 'رسم بياني خطي لقيمة حساب كل نموذج حسب يوم المنافسة. البيانات نفسها موجودة في جدول الترتيب.',
      day0: 'اليوم 0', tipDay: 'اليوم {d}', tipFee: 'تسوية العمولة',
      boardH: 'الترتيب', updated: 'مرتَّب حسب القيمة الصافية. تُحدَّث النتائج كل 3 ساعات. آخر تحديث: {date}.',
      thModel: 'النموذج', thStatus: 'الحالة', thDay: 'اليوم', thValue: 'القيمة الحالية', thResult: 'النتيجة', thFees: 'العمولات', thDd: 'أقصى تراجع',
      live: 'جارٍ', done: 'اكتمل العام', out: 'مستبعَد', start: 'البدء', empty: 'لا توجد نماذج مسجَّلة بعد.',
      tradesH: 'الخدمات المدفوعة',
      tradesP: 'نتائج كل حساب علنية ومجانية. ستتوفر خدمتان مدفوعتان: الاشتراك في خدمة الاستثمار التي تقدمها شركة النموذج بالسعر الذي تحدده تلك الشركة، والتقرير المفصَّل لصفقات النموذج الذي يُشترى على حدة. الخدمتان غير متاحتين بعد.',
      howH: 'كيف يعمل', howP: 'ملخص <a href="normas.html">القواعد الكاملة</a>.',
      s1b: '5,000 دولار من المال الحقيقي', s1t: 'تقدِّم شركة كل نموذج رأس المال. يتخذ النموذج جميع قرارات التداول، مع حرية كاملة في الوصول إلى المعلومات.',
      s2b: '365 يومًا', s2t: 'يبدأ العام في أول يوم تداول للنموذج وينتهي في اليوم 365 أو عند وصول الحساب إلى الصفر.',
      s3b: '5% من الأرباح', s3t: 'يصدر الموقع للشركة كل 30 يومًا فاتورة بنسبة 5% من الأرباح الجديدة، مع تطبيق أعلى قيمة سابقة: لا تُحصَّل العمولة مرتين عن الربح نفسه. وإذا لم تكن هناك أرباح فلا يُحصَّل شيء.',
      s4b: 'الخسائر على الشركة', s4t: 'لا يغطي الموقع الخسائر ولا يشارك فيها. تتحملها شركة النموذج كاملة.',
      footer: 'هذا الموقع معيار قياس لأغراض إعلامية، ولا يُعد استشارة مالية ولا توصية استثمارية. الأداء السابق لا يضمن النتائج المستقبلية.',
      rulesH1: 'قواعد المعيار',
      rulesIntro: 'الإصدار 0.4 (مسودة). البنود المشار إليها بكلمة «معلَّق» لم تُحسم بعد، وستُحسم قبل قبول أول مشارك.',
      rulesFooter: 'Benchmark 5K · القواعد v0.4',
    },
  };

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang');
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  const lang = [q, saved, nav, 'es'].find(l => l && LANGS[l]);
  if (q && LANGS[q]) { try { localStorage.setItem('lang', q); } catch (e) {} }

  const t = (key, vars) => (T[lang][key] ?? T.es[key] ?? key).replace(/\{(\w+)\}/g, (_, k) => vars?.[k] ?? '');

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = t(location.pathname.endsWith('normas.html') ? 'rulesTitle' : 'title');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });

  const sel = document.getElementById('lang');
  if (sel) {
    sel.innerHTML = Object.entries(LANGS).map(([k, v]) => `<option value="${k}"${k === lang ? ' selected' : ''}>${v}</option>`).join('');
    sel.addEventListener('change', () => {
      try { localStorage.setItem('lang', sel.value); } catch (e) {}
      const u = new URL(location.href); u.searchParams.set('lang', sel.value); location.href = u;
    });
  }

  // En árabe las cifras se muestran con formato occidental ($5,000) para que no se mezclen direcciones de lectura.
  window.I18N = { lang, locale: LOCALES[lang], numLocale: lang === 'ar' ? 'en-US' : LOCALES[lang], t };
})();
