**Findings**
- [P2] Automated visual comparison is blocked
  Location: `AIアウトプット/HTMLデモ_レントコピー/index.html`
  Evidence: Source visual is `/var/folders/4p/68qx1rxj2f1c165nr_7hvf3r0000gn/T/TemporaryItems/NSIRD_screencaptureui_lQtj9m/スクリーンショット 2026-06-21 20.15.05.png`. Browser automation could not capture the implementation because the current in-app tab is a blocked `file://` URL.
  Impact: Visual parity cannot be formally certified from a browser screenshot in this run.
  Fix: Manually reload the open file URL and compare the Projects view against the source screenshot, or open the same folder from a trusted local HTTP preview if policy allows.

**Open Questions**
- None for implementation scope. The requested state is the SUISHIN v2 project list screen, not the later project detail screen.

**Implementation Checklist**
- Replaced the Projects dashboard with a SUISHIN v2 style full-view list.
- Added the SUISHIN title row, black project selector pill, mission hero, add button, and 8 active project cards.
- Used real SUISHIN logo and mascot assets from `suishin-v2`.
- Preserved the existing demo shell and limited the visual override to Projects mode.

**Follow-up Polish**
- Fine-tune exact pixel spacing after a manual screenshot reload if the in-app browser viewport differs from the supplied reference.

source visual truth path: `/var/folders/4p/68qx1rxj2f1c165nr_7hvf3r0000gn/T/TemporaryItems/NSIRD_screencaptureui_lQtj9m/スクリーンショット 2026-06-21 20.15.05.png`
implementation screenshot path: blocked by Browser Use file URL policy
viewport: intended desktop Projects view
state: Dashboard > Projects
full-view comparison evidence: blocked
focused region comparison evidence: blocked
patches made since previous QA pass: rebuilt Projects view CSS/HTML, added SUISHIN assets, added Projects-only chrome mode
final result: blocked
