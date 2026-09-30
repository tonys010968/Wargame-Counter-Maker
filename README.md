# Wargame Counter Creator 1.3

## Release 1.3

This is the first production release of **Wargame Counter Creator** by **Starfall Works**. Release 1.0 establishes the current feature set as the stable baseline for future development.

### Core capabilities
- Counter sizes: 1/2", 5/8", 3/4" and 1"
- Classic, Six-Value, Information and Large Ship templates
- Two-sided counter design with independent front/back artwork
- Traditional silhouettes, imported custom symbols and NATO / APP-6 symbology
- Searchable NATO / APP-6 symbol browser with direct SIDC support
- Independent silhouette colors
- Damage explosion overlay with selectable color
- Background stripes and number highlighting
- Quantity and counter-order management
- CSV export and import for bulk editing
- Project save/load in JSON

### Printing and production
- Letter and A4 sheet layout
- General double-sided PDF export
- Superior POD export for 5/8", 3/4" and 1" counters
- Exact-slot manual POD placement
- Front/back registration and linked back positions
- Bleed-aware POD output
- Manufacturer reference templates bundled with the release

### Documentation
The release package includes both PDF and Word user manuals.


## Starfall Works

Wargame Counter Creator is a Starfall Works product. Version 0.8 adds subtle Starfall Works branding to the header and footer.

## Monetization / Ads

The downloadable version is intentionally ad-free. Google AdSense should not be embedded in a packaged/local software application. If a hosted web edition is created, advertising can be added to the surrounding website after the site is approved by the ad provider and applicable privacy/consent requirements are implemented.

For a non-intrusive layout, use one clearly separated banner area above the application workspace or place sponsorship on landing/help pages. Keep ads well away from Save, Export, Import, Print and other high-interaction controls.

A local browser-based tool for creating traditional hex-and-counter wargame counters and laying them out on printable sheets.

## Run

1. Extract the ZIP.
2. Open `index.html` in Chrome, Edge, Firefox, or Safari.
3. No server or installation is required.

## Included in 1.0

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


## v0.36 Superior POD export cleanup

Improved the **Superior POD** export in two important ways:

### 1) Removed black divider lines between counters
- The POD renderer no longer draws border strokes around each individual counter.
- This prevents unwanted dark lines between adjacent counters in the print file.

### 2) Increased POD text safety
- The Superior POD safe inset was increased slightly.
- The POD text and value layout was moved a bit farther inward.
- Unit names, top values and bottom values now sit less close to the trim boundaries.

### Scope
These changes apply specifically to the **Superior POD export** path.  
They do not change the normal on-screen designer or the General Double-Sided PDF layout behavior.


## v0.37 Large Ship template

Added the first layout designed specifically for larger counters: **Large Ship (3/4 & 1 inch)**.

### Layout
Top row:
- two numeric values on the left
- centered country designation, limited to 2 characters
- two numeric values on the right

Center:
- large ship silhouette
- ship name below the silhouette, left justified
- single-letter field at the right edge of the name row

Bottom row:
- two numeric values on the left
- centered ship-type designation, limited to 2 characters
- two numeric values on the right

### Larger-counter behavior
- The template is intended for 3/4 inch and 1 inch counters.
- Selecting Large Ship while using a smaller counter automatically changes the counter to 3/4 inch.
- Existing Classic, Six-Value and Information templates remain available for the larger sizes.

### Styling
- All eight numeric positions are optional.
- Each numeric position has its own text color, highlight toggle and highlight color.
- Country, ship type, ship name and the one-letter field use Label Font Size.
- Numeric ratings use Number Font Size.
- Silhouette color continues to use the independent Silhouette Color setting.
- Front and back faces can use different Large Ship values on two-sided counters.

### Output
The Large Ship layout is supported in:
- Counter Designer preview
- regular Sheet Designer output
- General Double-Sided PDF export
- CSV project data export

Superior POD remains limited to the manufacturer's 5/8 inch format, so Large Ship counters are intentionally not eligible for Superior POD export.


## v0.38 Superior POD 3/4-inch and 1-inch support

The Superior POD workflow now supports three manufacturer counter-sheet formats:

- **5/8 inch** - 176 front positions
- **3/4 inch** - 126 front positions
- **1 inch** - 80 front positions

### Template selector
The Sheet Designer now includes a **Superior POD counter size** selector. The selected size controls:

- the manufacturer press-sheet geometry
- which counters are eligible for the POD export
- the exact-slot manual planner
- the linked back positions
- the PDF page dimensions and counter positions

### Manual placement at all three sizes
Each size has its own persistent manual slot layout.

For 3/4-inch and 1-inch sheets, the planner reproduces the portrait manufacturer layout with fronts in the upper section and their linked backs in the lower section. A counter placed in a specific front slot is automatically paired with the corresponding back slot required by that template.

The 5/8-inch planner continues to use its existing side-by-side front/back arrangement.

### Automatic placement
Automatic export is also size-aware. It exports only counters matching the selected Superior POD size and fills manufacturer slots in counter-list/quantity order.

### Two-sided and one-sided counters
- True two-sided counters use their independently designed back face.
- One-sided counters receive the same background and stripe treatment on the linked back position with no text, symbol, or stats.
- **Repeat fronts on backs** remains available as an override.

### Printing details
- No printed divider/border lines are added to POD output.
- Background bleed is extended outside each finished counter area.
- PDF page dimensions remain true physical manufacturer dimensions at 72 PDF points per inch while artwork is rasterized internally at 300 DPI.

### Included reference templates
The package now contains the two supplied manufacturer reference PDFs in the `templates` folder:

- `Three-Quarter-Inch-Counter-Template.pdf`
- `1IN-Sheet-Design-2-8-14.pdf`

These are included for reference; the application export uses coded geometry derived from those templates rather than embedding the template artwork in the final print PDF.


## v0.39 CSV import / bulk editing

Added **Import CSV** to support bulk counter editing in Excel, Google Sheets, LibreOffice or another spreadsheet tool.

### Recommended workflow
1. Save the project JSON as your master backup.
2. Click **Export CSV**.
3. Open `wargame-counters.csv` in a spreadsheet.
4. Make bulk edits, such as changing every `Counter Size (in)` from `0.625` to `0.75`, or changing background/symbol/text colors.
5. Save/export the file as CSV.
6. Click **Import CSV** and select the edited file.

### How rows are matched
CSV import updates existing counters using **Counter Number**:
- Counter Number 1 updates the first counter in the project.
- Counter Number 2 updates the second counter, and so on.
- Import does not create duplicate counters.
- Rows with invalid counter numbers are skipped and reported.

### Partial-column imports
Only columns present in the CSV are changed. This means a simplified CSV containing just:
- Counter Number
- Counter Size (in)

can be used to change physical size without modifying names, colors or stats.

Blank cells in a column that is present are treated as the intended value for text/stat fields, so the safest workflow is to export from the tool, edit the desired cells and re-import.

### Supported bulk fields
CSV import supports the exported front-face fields, including:
- quantity
- template
- counter size
- background, stripe, border, text and silhouette colors
- label and number font sizes
- unit name/type/information text
- built-in or imported symbol selection
- Classic/Six-Value stats and number styling
- Large Ship country, letter, ship type and all eight number positions/styles

### Two-sided counters
The current CSV represents the front face. Importing a new counter size automatically updates the back face to the same physical size so front/back registration remains correct. Existing independently designed back-face artwork and values are preserved.

### Validation
- Supported sizes: 1/2, 5/8, 3/4 and 1 inch
- Fraction forms such as `5/8` and `3/4` are accepted as well as decimal forms such as `0.625` and `0.75`
- Colors accept `#RRGGBB` and `#RGB`
- Highlight values accept Yes/No, True/False and 1/0
- Large Ship counters are automatically kept at 3/4 inch or larger

## Bundled Superior POD templates

The ZIP now includes all three Superior POD manufacturer reference PDFs in the `templates` folder:

- `Five-Eighth-Inch-Counter-Template.pdf`
- `Three-Quarter-Inch-Counter-Template.pdf`
- `1IN-Sheet-Design-2-8-14.pdf`


## v0.40 imported silhouette background fix

Fixed a custom-symbol rendering problem where some imported silhouettes could appear as solid colored rectangles or black boxes.

### Cause
Earlier versions treated every nontransparent pixel in an imported image as part of the silhouette. Images that had a white, cream, gray or otherwise opaque background therefore caused the entire rectangular image area to be recolored.

### New behavior
Imported silhouettes are now normalized into a transparency mask:

- Images that already contain true transparency preserve their alpha channel.
- Opaque images have their background estimated from corner pixels.
- Near-background pixels are removed.
- Antialiased silhouette edges are retained with a soft transparency transition.
- The resulting silhouette can still use the **Silhouette Color** picker.

This correction applies to:
- Counter Designer preview
- regular sheet output
- General Double-Sided PDF
- Superior POD exports at 5/8, 3/4 and 1 inch

### Existing projects
When a saved project is loaded, v0.40 automatically creates normalized masks for older imported symbols that do not already contain one. The original imported image data is preserved in the project.


## v0.41 damage explosion overlay

Added a new per-side **Damage explosion** option for counters.

### What it does
- Places an explosion graphic behind the silhouette to represent a damaged unit
- Keeps the silhouette in the foreground
- Lets you choose the **Explosion color** independently from the silhouette color
- Works in the Counter Designer preview, sheet output, General Double-Sided PDF and Superior POD exports

### Notes
- The explosion appears only when the counter side has a silhouette selected
- Front and back can use different explosion settings on two-sided counters
- CSV export/import now includes `Damage Explosion` and `Damage Explosion Color` so bulk edits are possible


## v0.42 NATO / APP-6 military symbology

Added NATO joint military symbology support using the open-source **milsymbol 3.0.4** browser renderer.

### Why this is implemented as a renderer
APP-6 is a full military symbology standard rather than a short list of silhouettes. A direct SIDC renderer makes the complete symbol system accessible without hard-coding hundreds of individual SVG files.

### Symbol categories
The Silhouette / Symbol selector is now grouped into:
- Traditional silhouettes
- Old School unit symbols
- NATO / APP-6

This begins the symbol categorization work requested earlier.

### NATO / APP-6 controls
Choose **NATO / APP-6 Symbol…** and the designer exposes:
- a small set of common presets
- a direct **SIDC** field
- **Show NATO frame** toggle

The SIDC field accepts any symbol identification code supported by milsymbol, which includes STANAG APP-6 B, D and E as well as compatible MIL-STD-2525 symbology.

### Color and damage support
NATO symbols use the existing **Silhouette color** control through milsymbol's monochrome rendering option. The damage explosion overlay also works with NATO symbols and remains behind the military symbol.

### Output support
NATO symbols render in:
- Counter Designer preview
- regular sheet output
- General Double-Sided PDF export
- Superior POD export for 5/8, 3/4 and 1 inch sheets

### CSV
CSV export/import now includes:
- `NATO SIDC`
- `NATO Frame`

### Internet requirement
The main Wargame Counter Creator remains local and standalone. NATO rendering currently loads the MIT-licensed `milsymbol` browser bundle from UNPKG when the app opens, so NATO symbols require an internet connection. Existing built-in and imported silhouettes remain fully local.

### Library
- milsymbol 3.0.4
- Project: spatialillusions/milsymbol
- License: MIT


## v0.44 compact searchable NATO browser

v0.44 is rebuilt from v0.42 to preserve the established Wargame Counter Creator layout and styling.

### Old School group removed
The visible **Old School unit symbols** group has been removed because those box-based unit marks overlap with the NATO / APP-6 symbology workflow.

Older project files remain compatible. Old School infantry, cavalry, artillery and armor selections are migrated to corresponding NATO symbols when a project is loaded.

### Searchable NATO symbols
The NATO panel now uses a compact native interface:
- search field
- category filter
- small result list
- direct SIDC field
- optional frame toggle

This avoids the large card-style browser introduced in v0.43 and keeps the designer's dimensions and visual hierarchy consistent with v0.42.

### Search catalog
The built-in friendly-name catalog covers common combat, combat support, service support, command and aviation unit types. Direct SIDC entry remains available for any additional APP-6 symbol supported by milsymbol.


### New in 1.1
- Added **NATO unit size / echelon designation** support for NATO / APP-6 counters.
- Unit size options include Team/Crew, Squad, Section, Platoon, Company, Battalion, Regiment/Group, Brigade, Division, Corps, Army and Army Group/Front.
- The echelon mark appears above the NATO unit symbol in the on-screen designer, general PDF export and Superior POD export.
- CSV import/export now supports a **NATO Unit Size** column.


### New in 1.2
- Fixed NATO echelon marks being clipped at the top of the counter.
- NATO symbols and their echelon marks now use a managed vertical stack so the unit-size mark remains fully visible.
- When a NATO frame is enabled, the symbol/frame is shifted downward enough to prevent overlap with the echelon mark.
- The same spacing rules are used in screen preview, General PDF and Superior POD output.


### New in 1.3
- Fixed **Army Group / Front** echelon selection so `XXXXX` is retained and rendered correctly.
- NATO unit size is now preserved when copying a counter face to the back and when normalizing/loading two-sided projects.
