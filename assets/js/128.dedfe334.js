(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{343:function(e,t,s){"use strict";s.r(t);var r=s(0),n=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("As previously discussed, Git is a distributed version control system in which the entire repository exists on each developer's computer. As developers make and commit changes, these changes still only exist on their local machines. So, how do developers share their commits? This is where remote repositories come in.")]),e._v(" "),s("p",[e._v("A remote repository is a Git repository stored in a location that all team members can access. This remote repository is then connected to the local repositories, which allows for easy and fast syncing between the local and remote repositories.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("We need to connect our local(on our computer) git installation with our GitHub account. This is a two step process:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Login to your "),s("a",{attrs:{href:"https://github.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(" account and go to your account settings, clicking on your profile icon on the top right corner.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("Enter your GitHub password if prompted")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("Your token is ready, you can copy the token by clicking the clipboard icon from this screen when needed. Leave this window open for later reference.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("In this step we will install a credential helper for caching out personal access token so we do not have to enter it every time we are working with our remote repository.")]),e._v(" "),s("p",[e._v("These instructions are taken from "),s("a",{attrs:{href:"https://docs.github.com/en/github/using-git/caching-your-github-credentials-in-git",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub docs"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Open your Visual Studio Code and open a new terminal from Terminal > New Terminal option at the top.")]),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),s("p",[e._v("If you see the following output then the credential helper is already installed on your Mac.")]),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),s("p",[e._v("Install the credential helper by running the following command in your VS Code > Terminal")]),e._v(" "),e._m(23),e._m(24),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://git-scm.com/docs/git-clone",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("git clone")]),s("OutboundLink")],1),e._v(' command is used to "copy" a remote repository to a local computer. This process will also make a connection between the two so that syncing can occur.')]),e._v(" "),s("p",[e._v("We have a remote repository on GitHub that we want to clone down to our local machine. We would navigate to the repository page on GitHub, "),s("a",{attrs:{href:"https://github.com/imdac/git-up",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/imdac/git-up"),s("OutboundLink")],1),e._v(", and from there get the repository URL, which is found under the "),s("strong",[e._v("Clone or download")]),e._v(" button. Clicking the clipboard icon (📋) will copy the URL.")]),e._v(" "),s("p",[e._v("We can clone a remote repository using the Command-Line. We start by opening our command-line tool and navigating to our projects folder.")]),e._v(" "),e._m(25),e._m(26),e._v(" "),e._m(27),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),s("p",[e._v('Let\'s say a week has gone by, and other team members have made changes to the remote repository. We need to "pull" changes down to our local repository.')]),e._v(" "),e._m(31),s("p",[e._v("This process can also be done using VS Code by using the Synchronize Changes button found in the Status Bar.")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),s("p",[e._v('That\'s it. Git will take all of the commits that we have added since we synced our project and "push" them to the remote repository.')]),e._v(" "),s("p",[e._v("This process can also be done using VS Code by using the Synchronize Changes button found in the Status Bar. For more information, refer to the "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("Official Documentation"),s("OutboundLink")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"remote-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Remote Repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preparing-git-to-work-with-github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preparing-git-to-work-with-github","aria-hidden":"true"}},[this._v("#")]),this._v(" Preparing Git to work with GitHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Generating an personal access token on GitHub")]),this._v(" "),t("li",[this._v("Using a credential helper to remember our token on our computer")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"generating-a-personal-access-token"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generating-a-personal-access-token","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating a personal access token")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-1.png",alt:"Account Settings"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From the left-side menu select the "),t("strong",[this._v("Developer Settings")]),this._v(" option")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-2.png",alt:"Developer settings"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On the next screen select the "),t("strong",[this._v("Personal access tokens")]),this._v(" setting and click "),t("strong",[this._v("Generate new token")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-3.png",alt:"personal access token setting"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-4.png",alt:"github password"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next add a custom name for your token, and select "),t("code",[this._v("repo")]),this._v(" and "),t("code",[this._v("admin:repo_hook")]),this._v(" scope for your token")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-5.png",alt:"selecting token access"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/git-pat-6.png",alt:"Access token screen"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"installing-a-credential-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-credential-helper","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing a credential helper")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"mac-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac Users")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Find out if Git and the osxkeychain helper are already installed:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" credential-osxkeychain\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("Usage: "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" credential-osxkeychain "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("get"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("store"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("erase"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("If the osxkeychain helper isn't installed and you're running OS X version 10.9 or above, your computer will prompt you to download it as a part of the Xcode Command Line Tools:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" credential-osxkeychain\nxcode-select: note: no developer tools were found at "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/Applications/Xcode.app'")]),e._v(",\nrequesting install. Choose an option "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the dialog to download the "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("command")]),e._v(" line developer tools.\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"3"}},[t("li",[this._v("Tell Git to use osxkeychain helper using the global credential.helper config:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global credential.helper osxkeychain\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# Set git to use the osxkeychain credential helper")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"windows-users"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows Users")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global credential.helper wincred\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"cloning-a-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cloning-a-repository","aria-hidden":"true"}},[this._v("#")]),this._v(" Cloning a Repository")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# navigate to the projects folder")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" projects\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next, we type "),t("code",[this._v("git clone")]),this._v(" followed by the URL that we copied. Then hit enter.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# clone the repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/imdac/git-up.git\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"syncing-repositories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syncing-repositories","aria-hidden":"true"}},[this._v("#")]),this._v(" Syncing Repositories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A remote repository is only useful if changes made locally can synchronize to the remote repository. Fortunately, this can be done using the "),t("code",[this._v("pull")]),this._v(" and "),t("code",[this._v("push")]),this._v(" commands.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pulling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pulling","aria-hidden":"true"}},[this._v("#")]),this._v(" Pulling")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# pull commits from remote repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" pull\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"pushing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pushing","aria-hidden":"true"}},[this._v("#")]),this._v(" Pushing")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("So, we have cloned the remote repository and are now working locally. We made some changes to our local repository and committed those changes locally. Now we are ready to sync our commits to the remote repository. We do this using "),t("code",[this._v("git push")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# push commits to the remote repository")]),this._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" push\n")])])])}],!1,null,null,null);t.default=n.exports}}]);