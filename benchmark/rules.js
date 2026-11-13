// Normas del benchmark en los cuatro idiomas. La versión en español prevalece.
// Cada sección: [título, [puntos...], ejemplo opcional]. Un punto que empieza por "?" es un punto pendiente.
(function () {
  const RULES = {
    es: [
      ['1. Objeto', [
        'El benchmark mide la capacidad de un modelo de IA para invertir dinero real de forma autónoma durante un año.',
        'La única métrica de clasificación es el valor neto en dólares: el valor de la cuenta menos las comisiones facturadas por el sitio.',
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
        'No se permiten aportaciones ni retiradas durante el año, salvo la cobertura de saldos negativos de la norma 7.',
        'La cuenta se valora en USD. Las posiciones en otras divisas se convierten al tipo de cambio de cierre de cada día.',
        'La cuenta se abre a nombre de la empresa, en el bróker que designe el sitio, que es el mismo para todos los participantes. La empresa da al sitio acceso de solo lectura a la cuenta.',
        '?Pendiente: bróker designado.',
      ]],
      ['4. Duración', [
        'El año de cada modelo empieza el día de su primera sesión (día 0) y termina al cierre del día 365. Cada modelo tiene su propia fecha de inicio.',
        'La participación termina antes si el valor de la cuenta llega a cero o queda en negativo. El modelo queda eliminado y su historial permanece publicado.',
        'Al cierre del día 365 se cierran todas las posiciones y se factura la última comisión. El saldo permanece en la cuenta de la empresa.',
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
        'El apalancamiento máximo es de 3 veces el valor de la cuenta (exposición total de las posiciones dividida entre el valor de la cuenta).',
        'Está prohibida la venta de opciones al descubierto.',
      ]],
      ['6. Comisión del sitio', [
        'El sitio cobra el 5 % de las ganancias acumuladas. Se liquida cada 30 días (días 30, 60 … 360) y al cierre del día 365.',
        'Se aplica una marca de agua: la comisión se calcula solo sobre la parte del valor neto que supera el valor neto más alto alcanzado en una liquidación anterior. La marca inicial son los 5.000 USD.',
        'Si en una liquidación el valor neto no supera la marca de agua, no se cobra nada. Esta comisión solo se cobra cuando el modelo tiene ganancias.',
        'Las comisiones cobradas no se devuelven aunque el modelo pierda después.',
        'La comisión se factura a la empresa en cada liquidación y no se retira de la cuenta del modelo. El valor neto publicado descuenta todas las comisiones facturadas.',
      ], '<strong>Ejemplo.</strong> Día 30: el valor neto es 6.000 $. Ganancia nueva: 1.000 $; comisión: 50 $; el valor neto queda en 5.950 $, que pasa a ser la marca de agua. Día 60: el valor neto es 5.500 $. No supera la marca; comisión: 0 $. Día 90: el valor neto es 6.450 $. Ganancia nueva: 500 $; comisión: 25 $; nueva marca: 6.425 $.'],
      ['7. Pérdidas', [
        'Todas las pérdidas las asume la empresa del modelo. El sitio no cubre, comparte ni compensa pérdidas.',
        'Si por el uso de derivados o apalancamiento la cuenta queda en negativo, la empresa cubre el saldo deudor. Su pérdida puede, por tanto, superar los 5.000 USD.',
        'El sitio no garantiza ningún resultado.',
      ]],
      ['8. Publicación', [
        'Los resultados de cada cuenta se publican de forma gratuita y se actualizan cada 3 horas, desde el día 0 hasta el día 365 o hasta la eliminación. El sitio los lee automáticamente del bróker.',
        'La clasificación muestra: valor actual, resultado en USD y en porcentaje, comisiones pagadas y caída máxima.',
        'Los resultados de modelos eliminados o retirados no se borran.',
      ]],
      ['9. Servicios de pago', [
        'La empresa del modelo puede ofrecer servicios de inversión a inversores individuales basados en su modelo. La empresa fija el precio de la suscripción.',
        'El cliente paga la suscripción con independencia de que el modelo gane o pierda.',
        'La empresa paga al sitio un porcentaje del importe invertido por cada cliente.',
        'La empresa es la única responsable de esos servicios y de contar con las autorizaciones que exija la ley para prestarlos. El sitio no gestiona ni custodia dinero de los clientes.',
        'Los usuarios pueden comprar el informe detallado de los movimientos de un modelo. La empresa del modelo recibe el 40 % de lo que paga el cliente y el sitio el 60 %.',
        '?Propuesta de precio del informe detallado: 15 USD por los movimientos de un modelo en un periodo de 30 días.',
        '?Pendiente: porcentaje del importe invertido que la empresa paga al sitio, y momento en que los clientes ven cada operación.',
      ]],
      ['10. Aviso legal e idiomas', [
        'El contenido del sitio es informativo. No es asesoramiento financiero ni una recomendación de inversión.',
        'Operar con dinero de terceros, cobrar una comisión sobre resultados, prestar servicios de inversión a particulares y vender información sobre operaciones son actividades que pueden estar reguladas. Estas normas son un borrador y deben revisarse con asesoría legal y fiscal antes de operar con dinero real.',
        'Las normas se publican en español, inglés, chino y árabe. En caso de discrepancia prevalece la versión en español.',
      ]],
    ],

    en: [
      ['1. Purpose', [
        'The benchmark measures an AI model’s ability to invest real money on its own for one year.',
        'The only ranking metric is the net value in US dollars: the account value minus the fees invoiced by the site.',
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
        'No deposits or withdrawals are allowed during the year, except the covering of negative balances in rule 7.',
        'The account is valued in USD. Positions in other currencies are converted at each day’s closing exchange rate.',
        'The account is opened in the company’s name, at the broker designated by the site, which is the same for all participants. The company gives the site read-only access to the account.',
        '?Pending: designated broker.',
      ]],
      ['4. Duration', [
        'Each model’s year starts on its first trading day (day 0) and ends at the close of day 365. Each model has its own start date.',
        'Participation ends earlier if the account value reaches zero or goes negative. The model is eliminated and its history remains published.',
        'At the close of day 365 all positions are closed and the last fee is invoiced. The balance remains in the company’s account.',
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
        'Maximum leverage is 3 times the account value (total exposure of the positions divided by the account value).',
        'Selling uncovered options is prohibited.',
      ]],
      ['6. Site fee', [
        'The site charges 5% of accumulated gains. It is settled every 30 days (days 30, 60 … 360) and at the close of day 365.',
        'A high-water mark applies: the fee is calculated only on the part of the net value that exceeds the highest net value reached at a previous settlement. The initial mark is USD 5,000.',
        'If at a settlement the net value is not above the high-water mark, nothing is charged. This fee is charged only when the model has gains.',
        'Fees already charged are not refunded even if the model loses money later.',
        'The fee is invoiced to the company at each settlement and is not withdrawn from the model’s account. The published net value deducts all fees invoiced.',
      ], '<strong>Example.</strong> Day 30: the net value is $6,000. New gain: $1,000; fee: $50; the net value is left at $5,950, which becomes the high-water mark. Day 60: the net value is $5,500. It is not above the mark; fee: $0. Day 90: the net value is $6,450. New gain: $500; fee: $25; new mark: $6,425.'],
      ['7. Losses', [
        'All losses are borne by the model’s company. The site does not cover, share or compensate losses.',
        'If the use of derivatives or leverage leaves the account negative, the company covers the debit balance. Its loss can therefore exceed USD 5,000.',
        'The site does not guarantee any result.',
      ]],
      ['8. Publication', [
        'The results of each account are published free of charge and updated every 3 hours, from day 0 until day 365 or until elimination. The site reads them automatically from the broker.',
        'The leaderboard shows: current value, result in USD and as a percentage, fees paid and maximum drawdown.',
        'Results of eliminated or withdrawn models are not deleted.',
      ]],
      ['9. Paid services', [
        'The model’s company may offer investment services to individual investors based on its model. The company sets the subscription price.',
        'The client pays the subscription whether the model gains or loses.',
        'The company pays the site a percentage of the amount invested by each client.',
        'The company is solely responsible for those services and for holding any authorisations the law requires to provide them. The site does not manage or hold clients’ money.',
        'Users may buy the detailed report of a model’s trades. The model’s company receives 40% of what the client pays and the site 60%.',
        '?Proposed price of the detailed report: USD 15 for one model’s trades over a 30-day period.',
        '?Pending: the percentage of the invested amount that the company pays the site, and when clients see each trade.',
      ]],
      ['10. Legal notice and languages', [
        'The content of the site is informational. It is not financial advice or an investment recommendation.',
        'Trading with third-party money, charging a fee on results, providing investment services to individuals and selling trade information are activities that may be regulated. These rules are a draft and must be reviewed with legal and tax advisers before trading with real money.',
        'The rules are published in Spanish, English, Chinese and Arabic. In case of discrepancy the Spanish version prevails.',
      ]],
    ],

    zh: [
      ['1. 目的', [
        '本基准测试衡量 AI 模型在一年内自主投资真实资金的能力。',
        '唯一的排名指标是以美元计的净值：账户价值减去本站已开具账单的佣金。',
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
        '年度内不得存入或提取资金，但第 7 条的负余额补足除外。',
        '账户以美元计价。其他货币的持仓按每日收盘汇率折算。',
        '账户以公司名义在本站指定的券商开立，所有参赛者使用同一家券商。公司向本站提供该账户的只读访问权限。',
        '?待定：指定的券商。',
      ]],
      ['4. 期限', [
        '每个模型的年度自其首个交易日（第 0 天）开始，到第 365 天收盘时结束。每个模型有各自的起始日期。',
        '如果账户价值归零或变为负数，参赛提前结束。该模型被淘汰，其历史记录继续公布。',
        '第 365 天收盘时平掉所有持仓，并开具最后一笔佣金账单。余额保留在公司的账户中。',
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
        '最高杠杆为账户价值的 3 倍（持仓总敞口除以账户价值）。',
        '禁止卖出无担保期权。',
      ]],
      ['6. 本站佣金', [
        '本站收取累计收益的 5%。每 30 天结算一次（第 30、60 … 360 天），并在第 365 天收盘时结算。',
        '采用高水位线：佣金仅按净值中超过此前结算时所达最高净值的部分计算。初始水位线为 5,000 美元。',
        '如果结算时净值未超过高水位线，则不收取任何费用。该佣金仅在模型有收益时收取。',
        '已收取的佣金不予退还，即使模型此后亏损。',
        '佣金在每次结算时向公司开具账单，不从模型账户中扣除。公布的净值已扣除所有已开具账单的佣金。',
      ], '<strong>示例。</strong>第 30 天：净值 6,000 美元。新增收益 1,000 美元；佣金 50 美元；净值为 5,950 美元，并成为新的高水位线。第 60 天：净值 5,500 美元，未超过水位线；佣金 0 美元。第 90 天：净值 6,450 美元。新增收益 500 美元；佣金 25 美元；新水位线为 6,425 美元。'],
      ['7. 亏损', [
        '所有亏损均由模型所属公司承担。本站不承担、不分担、也不补偿亏损。',
        '如果因使用衍生品或杠杆导致账户为负，公司须补足欠款。因此其亏损可能超过 5,000 美元。',
        '本站不保证任何结果。',
      ]],
      ['8. 公布', [
        '自第 0 天起至第 365 天或被淘汰为止，免费公布每个账户的结果，每 3 小时更新一次。本站自动从券商读取数据。',
        '排行榜显示：当前价值、以美元和百分比表示的盈亏、已付佣金和最大回撤。',
        '被淘汰或撤回的模型的结果不会被删除。',
      ]],
      ['9. 付费服务', [
        '模型所属公司可以基于其模型向个人投资者提供投资服务。订阅价格由公司确定。',
        '无论模型盈利还是亏损，客户均须支付订阅费。',
        '公司按每位客户的投资金额向本站支付一定比例的费用。',
        '公司对上述服务以及取得法律要求的相关许可独自负责。本站不管理也不托管客户资金。',
        '用户可以购买某个模型的交易明细报告。客户所付费用的 40% 归模型所属公司，60% 归本站。',
        '?明细报告的建议价格：某个模型 30 天内的交易明细为 15 美元。',
        '?待定：公司按投资金额向本站支付的比例，以及客户何时可以看到每笔交易。',
      ]],
      ['10. 法律声明与语言', [
        '本站内容仅供参考，不构成财务建议或投资推荐。',
        '使用第三方资金进行交易、按业绩收取佣金、向个人提供投资服务以及出售交易信息，均可能属于受监管的活动。本规则为草案，在使用真实资金交易之前，必须经法律和税务顾问审核。',
        '本规则以西班牙语、英语、中文和阿拉伯语发布。如有歧义，以西班牙语版本为准。',
      ]],
    ],

    ar: [
      ['1. الغرض', [
        'يقيس هذا المعيار قدرة نموذج الذكاء الاصطناعي على استثمار أموال حقيقية بشكل مستقل لمدة عام.',
        'المقياس الوحيد للترتيب هو القيمة الصافية بالدولار الأمريكي: قيمة الحساب ناقص العمولات التي أصدر الموقع فواتيرها.',
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
        'لا يُسمح بالإيداع أو السحب خلال العام، باستثناء تغطية الأرصدة السالبة الواردة في القاعدة 7.',
        'يُقيَّم الحساب بالدولار الأمريكي. تُحوَّل المراكز بالعملات الأخرى بسعر صرف الإغلاق لكل يوم.',
        'يُفتح الحساب باسم الشركة لدى الوسيط الذي يحدده الموقع، وهو نفسه لجميع المشاركين. تمنح الشركة الموقع صلاحية الاطلاع فقط على الحساب.',
        '?معلَّق: الوسيط المحدَّد.',
      ]],
      ['4. المدة', [
        'يبدأ عام كل نموذج في أول يوم تداول له (اليوم 0) وينتهي عند إغلاق اليوم 365. لكل نموذج تاريخ بدء خاص به.',
        'تنتهي المشاركة قبل ذلك إذا وصلت قيمة الحساب إلى الصفر أو أصبحت سالبة. يُستبعد النموذج ويبقى سجله منشورًا.',
        'عند إغلاق اليوم 365 تُغلق جميع المراكز وتُصدر فاتورة العمولة الأخيرة. يبقى الرصيد في حساب الشركة.',
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
        'الحد الأقصى للرافعة المالية هو 3 أضعاف قيمة الحساب (إجمالي انكشاف المراكز مقسومًا على قيمة الحساب).',
        'يُحظر بيع الخيارات غير المغطاة.',
      ]],
      ['6. عمولة الموقع', [
        'يحصِّل الموقع 5% من الأرباح المتراكمة. تُسوَّى كل 30 يومًا (الأيام 30 و60 … 360) وعند إغلاق اليوم 365.',
        'تُطبَّق قاعدة أعلى قيمة سابقة: تُحسب العمولة فقط على الجزء من القيمة الصافية الذي يتجاوز أعلى قيمة صافية بلغها في تسوية سابقة. القيمة المرجعية الأولية هي 5,000 دولار أمريكي.',
        'إذا لم تتجاوز القيمة الصافية عند التسوية أعلى قيمة سابقة، فلا يُحصَّل شيء. لا تُحصَّل هذه العمولة إلا عندما يحقق النموذج أرباحًا.',
        'لا تُردّ العمولات المحصَّلة حتى لو خسر النموذج لاحقًا.',
        'تُصدر فاتورة العمولة للشركة عند كل تسوية ولا تُسحب من حساب النموذج. القيمة الصافية المنشورة تُخصم منها جميع العمولات التي صدرت فواتيرها.',
      ], '<strong>مثال.</strong> اليوم 30: القيمة الصافية 6,000 دولار. الربح الجديد 1,000 دولار؛ العمولة 50 دولارًا؛ تصبح القيمة الصافية 5,950 دولارًا، وهي القيمة المرجعية الجديدة. اليوم 60: القيمة الصافية 5,500 دولار. لم تتجاوز القيمة المرجعية؛ العمولة 0 دولار. اليوم 90: القيمة الصافية 6,450 دولارًا. الربح الجديد 500 دولار؛ العمولة 25 دولارًا؛ القيمة المرجعية الجديدة 6,425 دولارًا.'],
      ['7. الخسائر', [
        'تتحمل شركة النموذج جميع الخسائر. لا يغطي الموقع الخسائر ولا يشارك فيها ولا يعوِّض عنها.',
        'إذا أصبح الحساب سالبًا بسبب استخدام المشتقات أو الرافعة المالية، تغطي الشركة الرصيد المدين. ولذلك قد تتجاوز خسارتها 5,000 دولار أمريكي.',
        'لا يضمن الموقع أي نتيجة.',
      ]],
      ['8. النشر', [
        'تُنشر نتائج كل حساب مجانًا وتُحدَّث كل 3 ساعات، من اليوم 0 حتى اليوم 365 أو حتى الاستبعاد. يقرأ الموقع البيانات تلقائيًا من الوسيط.',
        'يعرض الترتيب: القيمة الحالية، والنتيجة بالدولار وبالنسبة المئوية، والعمولات المدفوعة، وأقصى تراجع.',
        'لا تُحذف نتائج النماذج المستبعَدة أو المنسحبة.',
      ]],
      ['9. الخدمات المدفوعة', [
        'يجوز لشركة النموذج تقديم خدمات استثمارية للمستثمرين الأفراد اعتمادًا على نموذجها. تحدد الشركة سعر الاشتراك.',
        'يدفع العميل الاشتراك سواء ربح النموذج أم خسر.',
        'تدفع الشركة للموقع نسبة من المبلغ الذي يستثمره كل عميل.',
        'الشركة هي المسؤولة الوحيدة عن تلك الخدمات وعن الحصول على التراخيص التي يشترطها القانون لتقديمها. لا يدير الموقع أموال العملاء ولا يحفظها.',
        'يمكن للمستخدمين شراء التقرير المفصَّل لصفقات نموذج معيّن. تحصل شركة النموذج على 40% مما يدفعه العميل ويحصل الموقع على 60%.',
        '?السعر المقترح للتقرير المفصَّل: 15 دولارًا أمريكيًا عن صفقات نموذج واحد خلال فترة 30 يومًا.',
        '?معلَّق: النسبة من المبلغ المستثمَر التي تدفعها الشركة للموقع، وموعد اطلاع العملاء على كل صفقة.',
      ]],
      ['10. إشعار قانوني واللغات', [
        'محتوى الموقع لأغراض إعلامية. لا يُعد استشارة مالية ولا توصية استثمارية.',
        'التداول بأموال الغير، وتحصيل عمولة على النتائج، وتقديم خدمات استثمارية للأفراد، وبيع معلومات الصفقات، أنشطة قد تكون خاضعة للتنظيم. هذه القواعد مسودة ويجب مراجعتها مع مستشارين قانونيين وضريبيين قبل التداول بأموال حقيقية.',
        'تُنشر القواعد بالإسبانية والإنجليزية والصينية والعربية. وعند الاختلاف تسود النسخة الإسبانية.',
      ]],
    ],
  };

  const sections = RULES[window.I18N.lang] || RULES.es;
  document.getElementById('rules').innerHTML = sections.map(([h, items, example]) =>
    `<h2>${h}</h2><ol>${items.map(i => i[0] === '?' ? `<li class="open">${i.slice(1)}</li>` : `<li>${i}</li>`).join('')}</ol>` +
    (example ? `<div class="example">${example}</div>` : '')).join('');
})();
