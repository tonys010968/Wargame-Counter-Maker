# Wargame Counter Creator v0.35


## Starfall Works

Wargame Counter Creator is a Starfall Works product. Version 0.8 adds subtle Starfall Works branding to the header and footer.

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. No server or installation is required.

## Included in v0.35

- Counter templates:
  - Classic: name, unit type, centered symbol and three bottom values
  - Six-Value: optional top-left and top-right values, centered symbol/name and three optional bottom values
  - Information: centered text on a colored background with an optional built-in or imported image
- Standard square counter sizes:
  - 1/2"
  - 5/8"
  - 3/4"
  - 1"
- Editable:
  - unit name
  - unit type
  - attack / bottom-left
  - defense / bottom-center
  - movement / bottom-right
  - top-left and top-right values for the Six-Value template
  - background, border and text colors
- Per-number styling:
  - separate text color for each number position
  - optional highlight for each number position
  - separate highlight color for each number position
- Custom symbol import:
  - PNG
  - JPG
  - SVG
  - imported symbols are stored in the saved project file
- Built-in silhouettes:
  - infantry
  - tank
  - artillery
  - truck
  - fighter
  - bomber
  - destroyer
  - cruiser
  - battleship
  - carrier
  - submarine
  - helicopter
- Bleed guide
- Safe-area guide
- Quantity per counter:
  - set a quantity from 1 to 999 for each counter design
  - Sheet Designer automatically places that many copies
  - quantity is preserved in saved projects and included in CSV export
- Duplicate and delete counters
- US Letter and A4 sheet layouts
- Portrait and landscape orientation
- Margins and gutters
- Crop marks
- Save/load project JSON
- CSV export:
  - one row per counter
  - includes all printed text and numeric values
  - includes template, symbol/image reference and counter size
  - includes background, border, text, number and highlight colors
  - includes highlight on/off settings
  - Excel/Google Sheets-friendly UTF-8 CSV
- Browser print / Save as PDF

## Notes

- Built-in silhouettes use SVG embedded directly in the application.
- Imported symbols are stored as data URLs inside project JSON files.
- The sheet layout currently assumes all counters use the same nominal size as the first counter in the project.
- Browser print dialogs vary. For best results, use 100% scale and disable browser headers/footers.
- Front/back counters, CSV import, richer templates and direct PDF generation are planned for later versions.

## v0.7 changes

- Added a **None** choice to the Silhouette menu.
- Fixed Six-Value template layering so the unit name and numbers render above the silhouette.


## v0.10 layout refinement

- Counter Designer starts closer to the top of the browser window.
- Header, tabs and preview toolbar use less vertical space on desktop.
- Designer and Sheet Designer stay within the browser viewport.
- Counter and Properties panels scroll internally instead of forcing the whole page to scroll.
- More vertical space is available for the counter preview.


## v0.11 Superior POD print export

- Dedicated 5/8-inch Superior POD export based on the supplied October 2023 template.
- Creates an 18 x 12 inch PDF page at the manufacturer slot positions.
- Uses 176 front positions per press sheet.
- Back positions are horizontally mirrored to the manufacturer's layout.
- Choose blank backs or repeat-front artwork on the mirrored back sheet.
- Enforces 5/8-inch counters for this export.
- Uses the specified 3/64-inch safe inset and extends solid counter backgrounds into the template bleed zones at group edges.
- Exports at 300 DPI with no colored template guides in the final print file.


## v0.12 Six-Value layout refinement

- The Six-Value silhouette now occupies a dedicated upper-middle image zone.
- The piece name is placed in a separate text band below the silhouette.
- The silhouette and piece name no longer overlap.
- Long names use a slightly smaller font and are clipped within the name band if necessary.


## v0.13 text fitting and one-sided backs

- Added a per-counter **Label text size (%)** control from 50% to 200%.
- The setting scales the unit name, unit type and Information-template text.
- Combat/stat numbers retain their independent sizing and styling.
- Label text size is saved with projects, included in CSV export and honored by Superior POD PDF export.
- The default Superior POD one-sided back is now a solid copy of the front counter's background color.
- One-sided backs keep the front border color but contain no text or silhouette.
- The alternate **Repeat fronts (mirrored)** mode remains available.


## v0.14 Superior POD bleed refinement

- Superior POD output now carries counter background colors into the spaces between occupied counters.
- When all counters on a press sheet use the same background color, that color fills the entire 18 x 12 inch press sheet.
- When neighboring counters use different colors, each background extends halfway into the gap and the two colors meet at the midpoint.
- When neighboring counters use the same color, the shared gap prints as one continuous color field.
- Empty counter positions remain blank on mixed-color sheets.
- Outside edges still receive the manufacturer bleed allowance.
- The same bleed logic is applied to front positions and one-sided/repeated back positions.


## v0.15 background stripe option

- Every counter template supports an optional background stripe.
- Stripe orientation can be **None**, **Vertical** or **Horizontal**.
- Stripe color is independent of the main background color.
- The stripe is centered and occupies 20% of the counter width or height.
- The stripe renders behind silhouettes, labels and values.
- Stripe settings are saved with projects and included in CSV export.
- The stripe appears in Counter Designer, Sheet Designer and Superior POD PDF output.
- One-sided POD backs use the same stripe treatment as the front background.


## v0.16 true two-sided counters and stripe positioning

- Counters can now be marked **Two-sided**.
- The Counter Designer switches between **Front** and **Back** editing for the same physical counter.
- **Copy Front to Back** provides a quick starting point before making back-side changes.
- Front and back share counter size, bleed and safe-area geometry to preserve registration.
- Quantity applies to the paired counter, so each printed copy receives its matching back.
- Regular Sheet Designer output creates a horizontally mirrored back page whenever two-sided counters are present.
- Superior POD export automatically places true back artwork in the manufacturer's matching mirrored back position.
- One-sided counters still use the front background treatment on the back by default.
- Vertical stripes can be positioned **Left / Center / Right**.
- Horizontal stripes can be positioned **Top / Center / Bottom**.


## v0.17 counter ordering

- Added **Move Up** and **Move Down** controls beside every counter in the left-hand list.
- The left-hand list is now the authoritative ordering for production output.
- Sheet Designer, regular print/PDF output and Superior POD PDF output all use the same counter order.
- Quantity is expanded after ordering, so all copies of a design remain together.
- The selected counter remains selected after it is moved.


## v0.18 Superior POD manual layout planner

The Superior POD exporter now has two layout modes:

- **Automatic counter order** keeps the existing behavior and fills manufacturer slots from the counter list order.
- **Manual slot layout** exposes all 176 front-side positions on each Superior POD press sheet.

Manual layout features:

- Assign any counter design to any individual front slot.
- Add multiple POD sheets and navigate between them.
- **Fill from Counter Order** creates a manual layout using the current counter-list order.
- **Group by Color** creates a starting layout sorted by background and stripe treatment so like-colored counters tend to share rows and columns.
- Each slot displays a color bar for quick visual grouping.
- A quantity summary shows `assigned / required` for every counter and flags missing or over-assigned designs.
- Blank slots are supported.
- Manual placement is saved inside the normal project JSON.
- The Superior POD PDF uses the exact manually assigned front positions.
- Two-sided backs remain linked to their fronts and are automatically placed in the correct horizontally mirrored back position.
- One-sided counters continue to use their front background treatment on the back.
- The existing bleed engine uses the actual neighboring slot assignments, so equal colors flow together and different colors meet halfway through the gap.


## v0.19 manual POD slot editing fix

- Fixed an issue where changing a counter in an individual manual POD slot could revert to the previous assignment.
- Slot dropdown changes now write directly to the active manual layout page.
- The planner no longer destroys and recreates the slot dropdown while its `change` event is still being processed.
- The slot color indicator and quantity-assignment summary update immediately after a manual change.
- Group by Color, Fill from Counter Order, page navigation and Superior POD export continue to use the saved manual assignments.


## v0.20 exact POD layout workspace

- Replaced the abstract 11-column manual planner with a workspace drawn from the exact Superior POD press-sheet coordinates.
- The planner now uses the same 18 x 12 proportions and the same irregular front-column positions as the exported PDF.
- Front positions appear on the left exactly where they will print.
- Linked back positions appear on the right in their actual mirrored locations.
- Click a front slot to select it, then use the larger **Selected slot** dropdown to assign or change the counter.
- The selected slot is highlighted clearly.
- Front and back colors are visible directly on the layout, making row/column color planning much easier.
- The exported PDF consumes these same slot indices and coordinates, so the on-screen arrangement and export now share one geometry model.


## v0.21 counter list width refinement

- Increased the width of the left-hand counter list on desktop.
- Move Up / Move Down arrows remain fully visible.
- Counter names have a little more room before truncating.
- The center preview remains flexible so the layout still adapts to browser width.


## v0.22 full font-size controls

- Renamed the existing size setting to **Label font size (%)**.
- Added **Number font size (%)** for top and bottom numeric values.
- Both controls range from 50% to 200% in 5% increments.
- Front and back faces of two-sided counters can use different font sizes.
- Both settings are saved in project JSON and included in CSV export.
- Counter Designer, regular sheets and Superior POD PDF output all honor the selected sizes.
- Older projects default number font size to 100%.


## v0.23 number centering fix

- Fixed numeric values appearing to drift sideways as Number Font Size increased.
- Bottom left, center and right values now use fixed center anchors at their intended counter positions.
- Six-Value top-left and top-right values also use fixed center anchors.
- Number highlights remain centered with their values.
- Superior POD/PDF rendering already used center-based canvas coordinates and remains aligned with the corrected on-screen layout.


## v0.24 on-screen number centering correction

- Reworked on-screen numeric positioning using fixed-width stat boxes.
- Each number box is positioned independently of the width of its text.
- Values are centered with flexbox rather than text-flow alignment or transforms.
- Increasing Number Font Size no longer changes the horizontal anchor.
- Bottom left, center and right values use symmetric fixed boxes.
- Six-Value top-left and top-right values use symmetric fixed boxes.
- Highlight pills remain centered around the number.
- Tabular numerals improve visual consistency for multi-digit values.


## v0.25 general double-sided PDF export

- Added a dedicated **General Double-Sided PDF** exporter.
- It creates a PDF directly rather than opening the browser print dialog.
- It honors Letter/A4, portrait/landscape, margin and gutter settings.
- Counters are placed in current counter-list order, with quantities expanded.
- Each front page is followed immediately by its matching back page.
- Back positions are horizontally mirrored for duplex registration.
- True two-sided counters use their designed back artwork.
- One-sided counters use the same background, stripe and border treatment with text, symbols and values removed.
- Mixed counter sizes are supported.
- The old browser-driven print function remains available as **Browser Print / PDF**.
- Superior POD export remains unchanged and continues to use the manufacturer-specific layout.


## v0.26 general PDF physical-size correction

- Fixed General Double-Sided PDF counters rendering larger than their specified physical size.
- General PDF artwork is now drawn directly at `counter size in inches × 300 DPI`.
- A 5/8 inch counter is therefore rendered at exactly 187.5 pixels on the 300 DPI PDF canvas.
- Removed the dependency on the Superior POD counter-size scaling path for general PDF artwork.
- Letter/A4 page geometry, margins, gutters and duplex mirroring remain unchanged.
- Counter text, symbols, stripes, borders and font scaling are rendered proportionally inside the true finished size.


## v0.27 true physical PDF sizing

- Fixed the underlying PDF page-size bug in direct PDF generation.
- The 300 DPI JPEG raster dimensions are now kept separate from the PDF's physical page dimensions.
- PDF pages use the PDF standard of **72 points per inch**.
- Letter pages are written as exactly 612 x 792 PDF points in portrait.
- A4 pages use their exact physical dimensions in PDF points.
- A 5/8 inch counter therefore occupies exactly **45 PDF points** on the finished page.
- The General Double-Sided PDF can now be printed at **100% / Actual Size** without counter enlargement caused by pixel-to-point confusion.
- Superior POD PDFs also explicitly use their true 18 x 12 inch PDF page dimensions.


## v0.28 PDF export regression fix

- Restored the missing `canvasToJpegBytes()` helper used by both direct PDF exporters.
- Verified the General Double-Sided PDF exporter calls the helper correctly.
- Verified the Superior POD PDF exporter calls the same helper correctly.
- Preserved the v0.27 physical sizing correction: raster resolution remains 300 DPI while PDF page size remains true physical size at 72 points per inch.
- Added a defensive error if the browser cannot convert a canvas page to JPEG.


## v0.29 PDF text-boundary correction

- General Double-Sided PDF artwork is now hard-clipped to the finished counter square.
- Text, symbols, highlights and stripes cannot draw outside the counter boundary.
- Unit names and unit types automatically reduce only when their requested font size would exceed the available text band.
- Six-Value names use the same fit-to-band behavior.
- Numeric values retain the requested Number Font Size when possible, but reduce only when needed to fit their individual stat position.
- Counter borders are drawn after clipping so the finished edge remains crisp and visible.
- Physical counter sizing from v0.27/v0.28 remains unchanged.


## v0.30 new built-in old school unit symbols

Added three new built-in symbol options based on the uploaded reference image:

- **Old School Infantry** — classic boxed X symbol
- **Old School Cavalry** — classic boxed diagonal slash symbol
- **Old School Artillery** — classic boxed dot symbol

These are available directly in the normal symbol dropdown and can be used anywhere the built-in silhouettes/symbols are supported, including:

- Counter Designer preview
- standard sheet layout
- General Double-Sided PDF export
- Superior POD export

### Future enhancement idea
As the library continues to grow, a future improvement would be to organize built-in symbols into categories such as:

- Ground Units
- Air Units
- Naval Units
- Old School / Traditional Symbols
- Custom Imported Symbols

That categorization feature is not implemented yet, but this version keeps the new old-school symbols ready for it.


## v0.31 old-school symbol centering correction

- Corrected the built-in **Old School Infantry**, **Old School Cavalry** and **Old School Artillery** symbol artwork so it is centered within the SVG canvas.
- This fixes the symbols appearing offset when placed on counters.
- The correction applies consistently to:
  - the on-screen Counter Designer
  - regular sheet layout
  - General Double-Sided PDF export
  - Superior POD export

### Technical note
The issue was not with symbol placement logic. The symbol wrapper itself was centering correctly, but the artwork inside the SVG view box was drawn too far left. The SVG geometry is now centered properly.


## v0.32 new built-in old-school symbol

Added one new built-in symbol based on the uploaded reference image:

- **Old School Armor** — classic boxed armor symbol with centered rounded capsule

This symbol is now available directly in the normal symbol dropdown and works anywhere the built-in symbols are supported, including:

- Counter Designer preview
- regular sheet layout
- General Double-Sided PDF export
- Superior POD export


## v0.33 new built-in old-school air symbols

Added three new built-in symbol options based on the uploaded reference image:

- **Old School Jet Fighter**
- **Old School Support Plane**
- **Old School Heavy Bomber**

These are available directly in the normal symbol dropdown and can be used anywhere the built-in silhouettes/symbols are supported, including:

- Counter Designer preview
- regular sheet layout
- General Double-Sided PDF export
- Superior POD export


## v0.34 default black symbol rendering

- All symbols now default to **black** for consistency.
- This applies to:
  - built-in silhouettes and old-school symbols
  - imported custom symbol images
  - on-screen designer preview
  - regular sheet layout
  - General Double-Sided PDF export
  - Superior POD export

### Technical details
- Built-in SVG symbols are now rendered with black artwork rather than inheriting the main text color.
- Imported custom symbols are converted to black while preserving transparency.

### Future enhancement idea
A useful future enhancement would be a separate **Symbol Color** control so the user could choose black, white or another color independently of the text color. That is not implemented yet. For now, the default behavior is black for all symbols.


## v0.35 silhouette color picker

Added a new **Silhouette Color** control so each counter side can choose the symbol color independently.

### What it affects
- built-in silhouettes
- old-school unit symbols
- imported custom silhouettes
- on-screen Counter Designer preview
- regular sheet layout
- General Double-Sided PDF export
- Superior POD export

### Behavior
- Default silhouette color remains **black** so older projects retain the same look.
- Front and back sides can use different silhouette colors when a counter is two-sided.
- CSV export now includes a **Symbol Color** column.

### Technical note
Imported symbols are now recolored dynamically while preserving transparency, so scanned or imported silhouette art can use the same color system as the built-in symbols.
