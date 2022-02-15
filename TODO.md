# TODO
## 2022-02-XX
### priority for v0.1.0
 - [ ] ability to modify the amount of each voter
 - [x] show the currently selected method and round-number 
 - [x] save current election to localStorage and add reset button
 - [x] fix errors for edge cases (0 candidates, 0 voters, negative voter weight, etc)

### other
 - [ ] redo the whole bar chart system:
    - create a Bar class
    - create a common BarChart component that can be used for all charts
    - bar chart settings passed in from parent blocks
 - [ ] blocks
    - [x] show round number, 
    - [x] method name, 
    - and winners
    - click on round number to pause
 - [ ] SuperElection2
    - use the Cache class 
    - rewrite all the methods to utilize the new Cache object
    - store winners for each Cache object
 - [ ] make the election method results return more info (e.g. `signed` should show the number for/against)
 - [ ] organize typescript types into a separate file
 - [ ] settings icon next to selected method if it has extra options like tie-breaking methods or being calculated with incomplete ballots
 - [ ] add references for each method
 - [ ] fancy star pattern for the winner 
 - [ ] a way for user to see voter preference ratings 
 - [ ] show numbers on bars... somehow (on hover?)

### fix
 - [ ] what the hell is happening with that hover effect over the `<text>` of empty bars??
 - [x] nice() the scales
 - [ ] site broken on safari mobile
 - [ ] really smol bras are hard to hover over... 
 - [ ] all the runoff methods are broken when there's a tie
 - [ ] don't overlap x-axis tick labels

### major features/tasks
 - [ ] write unit tests!!
 - [ ] datasets options + preset elections for each dataset + custom dataset
 - [ ] data and more info about each method and use that to create docs
 - [ ] figure out how to build it as a static site

### sidequests
 - [ ] disttint: see most related colors and compare different distancing methods
 - [ ] allsvote: vote for which method is best by voting for which method you want the results to be calculated in... Maybe it should be called metavote?

---

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