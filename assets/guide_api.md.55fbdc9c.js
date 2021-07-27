import{o as t,c as e,b as d}from"./app.2e4522d8.js";const o='{"title":"API","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Slot props","slug":"slot-props"},{"level":2,"title":"CSS variables","slug":"css-variables"}],"relativePath":"guide/api.md","lastUpdated":1627418729550}',r={},a=d('<h1 id="api"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h1><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>Name</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>placement</code></td><td><code>bottom</code></td><td>Preferred placement of the Popper</td></tr><tr><td><code>disableClickAway</code></td><td><code>false</code></td><td>Disables automatically closing the Popper when the user clicks away from it</td></tr><tr><td><code>offsetSkid</code></td><td><code>0</code></td><td>Offset in pixels along the trigger element</td></tr><tr><td><code>offsetDistance</code></td><td><code>12</code></td><td>Offset in pixels away from the trigger element</td></tr><tr><td><code>hover</code></td><td><code>false</code></td><td>Trigger the Popper on hover</td></tr><tr><td><code>arrow</code></td><td><code>false</code></td><td>Display an arrow on the Popper</td></tr><tr><td><code>arrowPadding</code></td><td><code>0</code></td><td>Stop arrow from reaching the edge of the Popper (in pixels)</td></tr><tr><td><code>disabled</code></td><td><code>false</code></td><td>Disables the Popper. If it was already open, it will be closed.</td></tr><tr><td><code>openDelay</code></td><td><code>0</code></td><td>Open the Popper after a delay (ms)</td></tr><tr><td><code>closeDelay</code></td><td><code>0</code></td><td>Close the Popper after a delay (ms)</td></tr><tr><td><code>interactive</code></td><td><code>true</code></td><td>If the Popper should be interactive, it will close when clicked/hovered if false</td></tr><tr><td><code>content</code></td><td><code>null</code></td><td>If your content is just a simple string, you can pass it as a prop</td></tr><tr><td><code>show</code></td><td><code>null</code></td><td>Control the Popper <strong>manually</strong>, other events (click, hover) are ignored if this is set to <code>true/false</code></td></tr><tr><td><code>zIndex</code></td><td><code>9999</code></td><td>The z-index of the Popper</td></tr></tbody></table><h2 id="events"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>open:popper</code></td><td>When the Popper is opened</td></tr><tr><td><code>close:popper</code></td><td>When the Popper is hidden</td></tr></tbody></table><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>content</code></td><td>For the Popper content</td></tr></tbody></table><h2 id="slot-props"><a class="header-anchor" href="#slot-props" aria-hidden="true">#</a> Slot props</h2><p>The <code>content</code> slot gives you access to useful variables and functions.</p><table><thead><tr><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>close</code></td><td>function</td><td>A function to close the Popper</td></tr><tr><td><code>isOpen</code></td><td>boolean</td><td>The <code>open</code> state of the Popper</td></tr></tbody></table><h2 id="css-variables"><a class="header-anchor" href="#css-variables" aria-hidden="true">#</a> CSS variables</h2><p><code>Popper</code> only comes with some barebones styling by default, but it also uses a list of predefined CSS variables. You can overwrite these variables to suit your needs.</p><table><thead><tr><th>CSS variable</th><th>Example value</th></tr></thead><tbody><tr><td><code>--popper-theme-background-color</code></td><td>#ffffff</td></tr><tr><td><code>--popper-theme-background-color-hover</code></td><td>#ffffff</td></tr><tr><td><code>--popper-theme-text-color</code></td><td>inherit</td></tr><tr><td><code>--popper-theme-border-width</code></td><td>1px</td></tr><tr><td><code>--popper-theme-border-style</code></td><td>solid</td></tr><tr><td><code>--popper-theme-border-color</code></td><td>#eeeeee</td></tr><tr><td><code>--popper-theme-border-radius</code></td><td>6px</td></tr><tr><td><code>--popper-theme-padding</code></td><td>16px</td></tr><tr><td><code>--popper-theme-box-shadow</code></td><td>0 6px 30px -6px rgba(0, 0, 0, 0.25)</td></tr></tbody></table>',13);r.render=function(d,o,r,c,s,p){return t(),e("div",null,[a])};export default r;export{o as __pageData};
