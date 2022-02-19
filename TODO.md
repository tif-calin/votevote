# TODO
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

### other
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
    - [ ] store winners for each Cache object
    - [ ] do we really have to regenerate the whole object everytime a candidate is removed? 
    - [x] make the election method results return more info (e.g. `signed` should show the number for/against)
 - clean up code
    - [ ] organize typescript types into a separate file
    - [ ] remove `as any` typescript stuff
 - [ ] settings icon next to selected method if it has extra options like tie-breaking methods or being calculated with incomplete ballots
 - [ ] more docs/info
    - [ ] add references for each method
    - [ ] alternative names
    - [ ] mathematical properties
    - [ ] electowiki / wikipedia link if existing 
 - [ ] fancy star pattern for the winner 
 - [x] a way for user to see voter preference ratings 
 - [ ] show numbers on bars... somehow (on hover?)
 - [ ] figure out a nice solution for a shitton of candidates 
 - [ ] make a particular election shareable by url
 - [ ] show a threshold line for relevant methods (passed in from parent blocks)
 - [ ] give a max size to the voter list and make overflow scrollable 
 - [ ] SEO and frontendchecklist stuffs
 - [ ] support for alternative datasets
    - [ ] each dataset has its own data structure and distance calculating method
    - [ ] custom datasets with manually entered preferences
 - accessibility overhaul
 - build as a static site
 - make the method options scrollable with a max-width (50%?) to support longer method names

### fix
 - [ ] what the hell is happening with that hover effect over the `<text>` of empty bars??
 - [x] nice() the scales
 - [x] site broken on safari mobile
 - [ ] really smol bars are hard to hover over... 
 - [x] all the runoff methods are broken when there's a tie
 - [x] don't overlap x-axis tick labels
 - [x] adding more voters to one already on the list doesn't upload the count in the display 
 - [x] netlify breaks if trying to open Link in new tab
 - [ ] clean up styling on mobile devices and across browsers
    - [ ] mobile: consistency in unicode/emoji formatting
    - [ ] safari-iphone: why is the select text blue on my iphone?
    - [ ] lambdatest: flexbox seems to be broken
    - [ ] firefox: cahrt sizing is off
 - [x] contingency methods still have 2 rounds even if there's a majority winner
 - [x] veto method doesn't thicken border around winner sometimes (e.g. no non-zero winners)

### sidequests
 - [ ] disttint: see most related colors and compare different distancing methods
 - [ ] allsvote: vote for which method is best by voting for which method you want the results to be calculated in... Maybe it should be called metavote?
 - [ ] votegame: a game where you try to manipulate voting systems 
 - [ ] individual subpages for each method

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