(function () {
  "use strict";

  var translations = {
    en: {
      metaTitle: "VAExpress — Expressive talking-face generation",
      metaDescription: "VAExpress generates expressive talking-face videos from one portrait and one audio clip, with audio-aligned emotion and continuous Valence-Arousal control.",
      skipLink: "Skip to content",
      "nav.label": "Primary navigation",
      "nav.results": "Results",
      "nav.method": "How it works",
      "nav.report": "Technical report",
      "language.label": "Language",
      "hero.kicker": "Expressive talking-face generation",
      "hero.title": "Make the face match the feeling.",
      "hero.lede": "VAExpress turns <strong>one portrait + one audio clip</strong> into a natural talking-face video. It goes beyond lip sync by generating facial expressions that follow the emotion of the voice.",
      "hero.resultsButton": "See the results",
      "hero.reportButton": "Read the report ↗",
      "capabilities.label": "Main capabilities",
      "capabilities.audio": "Emotion from audio",
      "capabilities.control": "Continuous emotion control",
      "capabilities.identity": "Identity-aware generation",
      "hero.caption": "Audio-driven results across different emotions. Turn on sound to view the full example.",
      "hero.videoLabel": "Audio-driven emotional talking-face results",
      "summary.goalLabel": "Goal",
      "summary.goal": "Generate a talking face that is not only synchronized, but also emotionally expressive.",
      "summary.methodLabel": "Method",
      "summary.method": "Continuous Valence-Arousal guidance with spatial-temporal decoupled training.",
      "summary.resultLabel": "Result",
      "summary.result": "Readable expressions, controllable intensity, and smooth emotion transitions.",
      "results.kicker": "Generated results",
      "results.title": "Judge it in motion.",
      "results.intro": "Three independent windows show method comparison, audio-driven emotion, and continuous emotion control.",
      "demo.sample1": "Example 01",
      "demo.sample2": "Example 02",
      "demo.compare.videoLabel": "VAExpress method comparison result",
      "demo.compare.videoLabel2": "VAExpress second method comparison result",
      "demo.compare.label": "Method comparison",
      "demo.compare.title": "More expressive than lip-sync-first methods",
      "demo.compare.description": "On the same portrait and audio, VAExpress produces clearer motion in the eyes, brows, cheeks, and overall facial expression.",
      "demo.audio.videoLabel": "VAExpress audio-driven emotion result",
      "demo.audio.videoLabel2": "VAExpress second audio-driven emotion result",
      "demo.audio.label": "Audio-driven emotion",
      "demo.audio.title": "The voice can direct the expression",
      "demo.audio.description": "When no manual control is supplied, emotion cues are estimated from speech and used to guide the facial performance.",
      "demo.control.videoLabel": "VAExpress continuous emotion control result",
      "demo.control.label": "Emotion control",
      "demo.control.title": "Adjust intensity and transition smoothly",
      "demo.control.description": "A continuous emotion sequence can raise expression intensity gradually or move between affective states without abrupt category changes.",
      "points.audioTitle": "Audio-aligned",
      "points.audioText": "Expressions follow the affective state of speech.",
      "points.controlTitle": "Fine-grained",
      "points.controlText": "Intensity can change continuously over time.",
      "points.timeTitle": "Temporally coherent",
      "points.timeText": "Transitions stay smooth without flattening expression.",
      "method.kicker": "How it works",
      "method.title": "Three inputs, one expressive video.",
      "figure.pipelineAlt": "VAExpress model pipeline and two-stage training strategy",
      "figure.pipelineOpen": "Open the full-size VAExpress pipeline",
      "figure.pipelineKicker": "Technical view",
      "figure.pipelineTitle": "Overall pipeline and two-stage training",
      "figure.pipelineText": "Reference identity, speech, and continuous VA emotion signals enter separate conditioning branches before being combined by the diffusion generator. The right side shows the image-first, video-second training strategy.",
      "guidance.kicker": "Continuous guidance",
      "guidance.title": "Valence controls feeling. Arousal controls energy.",
      "guidance.text": "Instead of choosing only a fixed label such as “happy” or “sad,” VAExpress uses a continuous two-dimensional emotion signal. This makes subtle intensity changes and smooth transitions possible.",
      "guidance.visualAlt": "Generated facial expressions distributed across the Valence-Arousal emotion space",
      "guidance.visualOpen": "Open the full-size Valence-Arousal visualization",
      "training.kicker": "Decoupled training",
      "training.title": "Learn expression first, then learn smooth motion.",
      "training.text": "Training spatial and temporal modules together can over-smooth facial movement. VAExpress first learns accurate emotion-to-expression mappings on images, then adds temporal training for coherent video.",
      "training.stage1": "Stage 1",
      "training.stage1Text": "Static expression learning",
      "training.stage2": "Stage 2",
      "training.stage2Text": "Temporal adaptation",
      "figure.overviewAlt": "Audio-aligned facial expressions, fine-grained intensity adjustment, and emotion transition",
      "figure.overviewOpen": "Open the full-size spatial-temporal training visualization",
      "figure.overviewKicker": "Spatial-temporal decoupled training visualization",
      "figure.overviewTitle": "Clear expression response, then smooth temporal change.",
      "figure.overviewText": "The top row shows expressions aligned with speech. The bottom row shows that continuous VA signals can adjust intensity and drive an emotion transition. The two-stage training keeps this expressive response before adding temporal coherence.",
      "figure.analysisAlt": "Analysis of spatial suppression and temporal smoothing caused by temporal modules",
      "figure.analysisOpen": "Open the full-size temporal module analysis",
      "figure.analysisKicker": "Why decouple training",
      "figure.analysisTitle": "Temporal modules can suppress expression response.",
      "figure.analysisText": "The orange curves with temporal modules are flatter and react more slowly to changing arousal. The blue curves without them follow the control signal more closely. This motivates learning expressive mappings first, then adding temporal coherence.",
      "evidence.label": "Evaluation summary",
      "evidence.text": "The practical effect is visible in the clips above. Controlled evaluation also shows stronger expression accuracy and video quality on MEAD and RAVDESS.",
      "evidence.link": "View the full evaluation in the technical report ↗",
      "closing.title": "One portrait. One voice.<br>A more expressive result.",
      "closing.button": "Open technical report ↗",
      "footer.responsible": "Use responsibly: obtain consent and disclose synthetic media."
    },
    zh: {
      metaTitle: "VAExpress｜有情绪的说话人脸生成",
      metaDescription: "VAExpress 使用一张人像和一段语音生成有表现力的说话人脸视频，支持语音情绪驱动与连续效价-唤醒度控制。",
      skipLink: "跳到主要内容",
      "nav.label": "主导航",
      "nav.results": "效果展示",
      "nav.method": "实现方式",
      "nav.report": "技术报告",
      "language.label": "语言选择",
      "hero.kicker": "有情绪的说话人脸生成",
      "hero.title": "让人脸表达声音中的情绪。",
      "hero.lede": "VAExpress 使用<strong>一张人像 + 一段语音</strong>生成自然的说话人脸视频。它不仅同步口型，还让面部表情跟随语音情绪变化。",
      "hero.resultsButton": "查看生成效果",
      "hero.reportButton": "阅读技术报告 ↗",
      "capabilities.label": "主要能力",
      "capabilities.audio": "语音情绪驱动",
      "capabilities.control": "连续情绪控制",
      "capabilities.identity": "身份保持生成",
      "hero.caption": "不同情绪下的语音驱动结果。打开声音可查看完整效果。",
      "hero.videoLabel": "语音驱动的情绪说话人脸生成结果",
      "summary.goalLabel": "目标",
      "summary.goal": "生成不仅口型同步，而且具有清晰情绪表达的说话人脸视频。",
      "summary.methodLabel": "方式",
      "summary.method": "连续效价-唤醒度引导与时空解耦训练。",
      "summary.resultLabel": "效果",
      "summary.result": "表情清晰、强度可控，并能平滑完成情绪过渡。",
      "results.kicker": "生成效果",
      "results.title": "直接看视频效果。",
      "results.intro": "三个独立窗口分别展示方法对比、语音情绪驱动和连续情绪控制。",
      "demo.sample1": "示例 01",
      "demo.sample2": "示例 02",
      "demo.compare.videoLabel": "VAExpress 方法对比效果视频",
      "demo.compare.videoLabel2": "VAExpress 第二组方法对比效果视频",
      "demo.compare.label": "方法对比",
      "demo.compare.title": "比仅关注口型同步的方法更有表现力",
      "demo.compare.description": "在相同人像和语音下，VAExpress 在眼睛、眉毛、面颊和整体面部表情上呈现出更清晰的情绪变化。",
      "demo.audio.videoLabel": "VAExpress 语音情绪驱动效果视频",
      "demo.audio.videoLabel2": "VAExpress 第二组语音情绪驱动效果视频",
      "demo.audio.label": "语音驱动",
      "demo.audio.title": "让声音直接引导面部表情",
      "demo.audio.description": "未提供手动控制时，系统从语音中估计情绪信息，并用它引导面部表演。",
      "demo.control.videoLabel": "VAExpress 连续情绪控制效果视频",
      "demo.control.label": "情绪控制",
      "demo.control.title": "平滑调节强度与情绪过渡",
      "demo.control.description": "连续情绪序列可以逐步提高表情强度，也可以在不同情绪状态间自然变化，避免离散标签带来的突变。",
      "points.audioTitle": "匹配语音情绪",
      "points.audioText": "面部表情跟随语音中的情绪状态。",
      "points.controlTitle": "细粒度控制",
      "points.controlText": "表情强度可以随时间连续变化。",
      "points.timeTitle": "时序连贯",
      "points.timeText": "情绪过渡保持平滑，同时不过度压平表情。",
      "method.kicker": "实现方式",
      "method.title": "三类输入，生成一段有表现力的视频。",
      "figure.pipelineAlt": "VAExpress 模型流程与两阶段训练策略",
      "figure.pipelineOpen": "打开 VAExpress 流程高清图",
      "figure.pipelineKicker": "技术图解",
      "figure.pipelineTitle": "整体生成流程与两阶段训练",
      "figure.pipelineText": "参考身份、语音和连续 VA 情绪信号分别进入对应的条件分支，再由扩散生成器统一融合。右侧展示了先图像、后视频的两阶段训练方式。",
      "guidance.kicker": "连续情绪引导",
      "guidance.title": "效价决定情绪倾向，唤醒度决定情绪能量。",
      "guidance.text": "VAExpress 不只使用“开心”或“悲伤”等固定标签，而是采用连续的二维情绪信号，因此可以表达细微的强度变化与平滑的情绪过渡。",
      "guidance.visualAlt": "分布在效价-唤醒度情绪空间中的生成人脸表情",
      "guidance.visualOpen": "打开效价-唤醒度高清配图",
      "training.kicker": "时空解耦训练",
      "training.title": "先学清晰表情，再学平滑运动。",
      "training.text": "同时训练空间和时间模块容易让表情过度平滑。VAExpress 先在图像上学习准确的情绪到表情映射，再加入时序训练以保证视频连贯。",
      "training.stage1": "阶段 1",
      "training.stage1Text": "静态表情学习",
      "training.stage2": "阶段 2",
      "training.stage2Text": "时序适配",
      "figure.overviewAlt": "语音情绪对齐、细粒度表情强度调节与情绪过渡效果",
      "figure.overviewOpen": "打开时空解耦训练高清配图",
      "figure.overviewKicker": "时空解耦训练可视化",
      "figure.overviewTitle": "先保留清晰的情绪响应，再保证平滑变化。",
      "figure.overviewText": "上方展示面部表情如何跟随语音情绪，下方展示连续 VA 信号对表情强度和情绪过渡的控制。两阶段训练先保留这种清晰的表情响应，再加入时序一致性，避免动作被过度平滑。",
      "figure.analysisAlt": "时间模块造成表情强度抑制与时序平滑的分析图",
      "figure.analysisOpen": "打开时间模块分析高清图",
      "figure.analysisKicker": "为什么需要解耦训练",
      "figure.analysisTitle": "时间模块可能抑制表情响应。",
      "figure.analysisText": "加入时间模块后的橙色曲线更平缓，对唤醒度变化的响应也更慢；未加入时间模块的蓝色曲线更贴近控制信号。因此，VAExpress 先学习清晰的表情映射，再加入时序一致性。",
      "evidence.label": "评估说明",
      "evidence.text": "实际效果可以直接从上方视频判断。MEAD 与 RAVDESS 上的受控评估也显示出更好的表情准确性和视频质量。",
      "evidence.link": "在技术报告中查看完整评估 ↗",
      "closing.title": "一张人像，一段语音。<br>生成更有表现力的结果。",
      "closing.button": "打开技术报告 ↗",
      "footer.responsible": "请负责任地使用：获得人物授权，并明确披露合成内容。"
    }
  };

  var languageLinks = Array.from(document.querySelectorAll("[data-language]"));
  var currentLanguage = readLanguage();

  function readLanguage() {
    var language = new URLSearchParams(window.location.search).get("lang");
    return language === "zh" ? "zh" : "en";
  }

  function text(key) {
    return translations[currentLanguage][key] || translations.en[key] || key;
  }

  function applyLanguage(language) {
    currentLanguage = language === "zh" ? "zh" : "en";
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.title = text("metaTitle");

    var metaDescription = document.querySelector('meta[name="description"]');
    var ogTitle = document.querySelector('meta[property="og:title"]');
    var ogDescription = document.querySelector('meta[property="og:description"]');
    if (metaDescription) metaDescription.content = text("metaDescription");
    if (ogTitle) ogTitle.content = text("metaTitle");
    if (ogDescription) ogDescription.content = text("metaDescription");

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      element.textContent = text(element.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      element.innerHTML = text(element.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
      element.setAttribute("aria-label", text(element.dataset.i18nAriaLabel));
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
      element.setAttribute("alt", text(element.dataset.i18nAlt));
    });

    languageLinks.forEach(function (link) {
      var active = link.dataset.language === currentLanguage;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  languageLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var language = link.dataset.language === "zh" ? "zh" : "en";
      var url = new URL(window.location.href);
      if (language === "zh") url.searchParams.set("lang", "zh");
      else url.searchParams.delete("lang");
      window.history.pushState({ language: language }, "", url);
      applyLanguage(language);
    });
  });

  window.addEventListener("popstate", function () {
    applyLanguage(readLanguage());
  });

  applyLanguage(currentLanguage);
})();
