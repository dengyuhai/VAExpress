# VAExpress

VAExpress is a practical expressive talking-face generation project. Given a reference portrait and speech, it creates an identity-aware talking video whose facial expression can follow audio emotion or a creator-defined continuous Valence-Arousal (VA) sequence.

The homepage is video-first: it focuses on visible output quality, emotion range, fine-grained control, and practical application scenarios rather than presenting the work as an academic paper page.

## Local preview

Run any static HTTP server from the repository root. For example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

The homepage defaults to English. Open `http://localhost:8000/?lang=zh` or use the `EN / 中文` selector in the header for the Chinese version. Both languages share the same page structure and media.

## Project media

- `compare_video/compare1.mp4` and `compare2.mp4`: side-by-side method comparisons
- `compare_video/emotion_audio_drive1.mp4` and `emotion_audio_drive2.mp4`: audio-driven emotional results
- `compare_video/emotion_control.mp4`: emotion intensity and transition control
- `VAExpress.pdf`: full technical report
- `static/images/report/vaexpress-pipeline.png`: high-resolution pipeline extracted from the report
- `static/images/report/temporal-module-analysis.png`: high-resolution temporal-module analysis extracted from the report
- `static/images/report/vis_va2.png`: full-resolution Valence-Arousal visualization used in the method section
- `static/images/report/vis_va2.webp`: optimized web display version of the same visualization

## Technical foundation

VAExpress combines continuous Valence-Arousal emotion guidance with spatial-temporal decoupled training. It first learns clear expression mappings at the image level, then adapts temporal modules for coherent motion.
