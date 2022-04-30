# TODO
## 2022-02-27

### priority for v0.1.4
 - [ ] new methods: median
 - [ ] about/faq page
 - [ ] disttint
 - [ ] different datasets
    - [ ] other colors datasets, cities, custom dataset, etc
    - [ ] voter preference scoring options
 - [ ] submit sitemap to google
 - [ ] gamify with high score thing

### priority for v0.1.3
 - [ ] add hybrid methods: star and 3-2-1
 - [ ] seo best practices: h-tags 
 - [ ] more info on charts: threshold lines, marks, etc
 - [ ] solution for visualizing pairwise comparison and methods with different "stages" (as opposed to rounds)
 - [ ] optimize existing methods to use cacheing
    - [ ] cache approval threshold classes
 - [x] add explanatory info
 - [x] add a sitemap.xml
 - [x] fix iPhone icon
 - [x] add shoutout for vodle, votyvote

## 2022-02-19
### priority for v0.1.2
 - [x] deal with large number of voters problem
 - [x] add some fun methods
    - [x] positional: borda, nauru, euorvision, dabagh
    - [x] approval, 
    - [x] quadratic, 
    - [x] cumulative,
    - [x] copeland
 - [x] bar scores
 - [x] fix random voter bug
 - [x] removing a voter or candidate should automatically select them
 - [x] fix `copeland` and `lull` score is wrong because it compares candidates against themselves lol

## 2022-02-16
### priority for v0.1.1
 - [x] add contingency block
 - [x] add a way for users to see a voter's preferences
 - [x] ability to pause a round
 - [x] show winners in block 
 - [x] more efficient election calculation
 - [x] bug fixes...
    - [x] voter display not synced with state if added from bar
    - [x] contingency methods have 2 rounds always
    - [x] netlify breaks if navigating directly to url

## 2022-02-15
### priority for v0.1.0
 - [x] ability to modify the amount of each voter
 - [x] show the currently selected method and round-number 
 - [x] save current election to localStorage and add reset button
 - [x] fix errors for edge cases (0 candidates, 0 voters, negative voter weight, etc)

### features
 - [ ] come up with a nice visualization for pairwise matrices
 - [ ] change the pairwise matrix in ElectionCache so it uses ballotsScored
 - [ ] redo the whole bar chart system:
    - [ ] create a Bar class
    - [ ] create a common BarChart component that can be used for all charts
    - [ ] bar chart settings passed in from parent blocks
 - [x] blocks
    - [x] show round number, 
    - [x] method name, 
    - [x] and winners
    - [x] click on round number to pause
 - [x] SuperElection2
    - [x] use the Cache class 
    - [x] rewrite all the methods to utilize the new Cache object
    - [x] store winners for each Cache object
    - [ ] do we really have to regenerate the whole object everytime a candidate is removed? 
    - [x] make the election method results return more info (e.g. `signed` should show the number for/against)
 - [ ] settings icon next to selected method if it has extra options like tie-breaking methods or being calculated with incomplete ballots
 - [ ] more docs/info
    - [ ] add references for each method
    - [x] alternative names
    - [ ] mathematical properties
    - [x] electowiki / wikipedia link if existing 
    - [x] consolidate all voting method info 
 - [ ] fancy star pattern for the winner 
 - [x] a way for user to see voter preference ratings 
 - [x] show numbers on bars... somehow (on hover?)
 - [ ] figure out a nice solution for a shitton of candidates 
 - [ ] make a particular election shareable by url
 - [ ] show a threshold line for relevant methods (passed in from parent blocks)
 - [x] give a max size to the voter list and make overflow scrollable
 - [ ] support for alternative datasets
    - [ ] each dataset has its own data structure and distance calculating method
    - [ ] custom datasets with manually entered preferences
 - [x] make the method options scrollable with a max-width (50%?) to support longer method names
 - [x] improve the title text showing voter preferences
 - [x] removing a candidate/voter should set selected to the removed candidate/voter
 - [x] change the app icon for mobile to not have transparent background
 - [ ] create an About page with an FAQ
 - [ ] secret menu for debugging and things I like to do like randomly select n+1 voters m times
 - [ ] on small screens, make block method switcher and block title on separate lines
 - [ ] clicking "show explanation" should scroll to top
 - [ ] shift + clicking shuffle will also randomly change the amount
 - [ ] ability to sort rosters by name, weight, order, etc

### fix
 - [x] what the hell is happening with that hover effect over the `<text>` of empty bars??
 - [x] nice() the scales
 - [x] site broken on safari mobile
 - [x] really smol bars are hard to hover over... 
 - [x] all the runoff methods are broken when there's a tie
 - [x] don't overlap x-axis tick labels
 - [x] adding more voters to one already on the list doesn't upload the count in the display 
 - [x] netlify breaks if trying to open Link in new tab
 - [x] clean up styling on mobile devices and across browsers
    - [x] mobile & safari: consistency in unicode/emoji formatting
    - [x] safari-iphone: why is the select text blue on my iphone?
    - [x] firefox: bar text invisible past bar
    - [x] firefox: chart sizing is off
    - [x] safari-mac: scroll shadows are fuqqed
    - [x] safari-mac: rainbow text doesn't do fancy transition
 - [x] contingency methods still have 2 rounds even if there's a majority winner
 - [x] veto method doesn't thicken border around winner sometimes (e.g. no non-zero winners)
 - [x] random candidate/voter button might choose one that's not in the list of options 
 - [x] when resetting voters to preset, number display doesn't change if a voter is in both lists
 - [x] `copeland` and `lull` score is wrong because it compares candidates against themselves lol
 - [ ] tab order skips buttons on safari
 - [ ] tab order skips method switcher in blocks
 - [x] in voter roster, square may get squished and color names show on multiple lines
 - [ ] when the method is switched and the y-axis varies drastically, bars don't smoothly transition

### longterm
 - open it up for external contributions
    - [ ] clean up the code
       - [ ] organize typescript types into a separate file
       - [ ] remove `as any` typescript stuff
    - [ ] PR template
    - [ ] CONTRIBUTING.md
    - [ ] use GitHub versioning
    - [ ] use GitHub issues instead of TODO.md
    - [ ] add linting rules
    - [ ] unit testing!
 - accessibility (a11y)
    - [ ] screen reader accessibility
    - [ ] keyboard accessibility
 - search engine optimization (seo)
    - [x] add a sitemap
    - [ ] frontendchecklist stuffs
 - progressive web apps?
    - [ ] build as a static site
    - [ ] [publish to f-droid](https://forum.f-droid.org/t/progressive-web-apps/1691/2)
    - [ ] use webgpu for calculations
    - [ ] content api for offline uses

### sidequests
 - [ ] disttint: see most related colors and compare different distancing methods
 - [ ] allsvote: vote for which method is best by voting for which method you want the results to be calculated in... Maybe it should be called metavote?
 - [ ] votegame: a game where you try to manipulate voting systems 
    - achievements: e.g. find an election that results in different baldwin and nanson results
    - get the largest number of different candidates as winners
 - [ ] individual subpages for each method
 - [ ] voting service like votyvote
 - [ ] make-your-own voting systems
    - runoff
       - drop_condition (e.g. all candidates with less than average copeland score, least of borda score, etc)
       - win_condition (e.g. more than 50% of remaining first-choice votes)
    - weighted positional
       - vector constructor

---

<details>
<summary>archive</summary>

## 2022-02-13
### Smol
 - [ ] make `signed` method return the number of votes for and against each candidate
   - [ ] show marks on its graphic
 - [ ] mark the negative and positive votes for `vfa` 
 - input
   - [ ] allow modification of the number for each voter
   - [ ] on hover over voters, show their ballots
   - [ ] allow other datasets (colors:xkcd, colors:culi, colors:html, cities)
   - [ ] allow for CUSTOM voters
 - [ ] useLocalStorage to save inputs. Also, add a reset button
 - [x] start keeping a changelog
 - [x] x-axis ticks: dynamic positioning 
 - [ ] x-axis ticks: don't overlap other ticks
 - [ ] chart blocks: show the full name of current method + round number + winner(s)

### Biggo 
 - **Build as static site**
   - [ ] fix SPA for gh-pages (https://github.com/rafgraph/spa-github-pages) 
 - **Testing**
   - [ ] unit testing for each method
 - **Docs**

### Sidequests
 - disttint page 
 - allsvote page

</details>