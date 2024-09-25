"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[3652],{9832:(e,i)=>{i.A=(e,i)=>{const s=e.__vccOpts||e;for(const[e,a]of i)s[e]=a;return s}},2308:(e,i,s)=>{s.r(i),s.d(i,{comp:()=>l,data:()=>o});var a=s(3785);const t={},l=(0,s(9832).A)(t,[["render",function(e,i){return(0,a.uX)(),(0,a.CE)("div",null,i[0]||(i[0]=[(0,a.Fv)('<p><a href="https://docsify.js.org/#/zh-cn/" target="_blank" rel="noopener noreferrer">docsify</a> 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。</p><p>本页集中了我使用 docsify 中遇到的问题，新手先看 <a href="https://docsify.js.org/#/zh-cn/" target="_blank" rel="noopener noreferrer">docsify 入门文档</a>。</p><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><p><a href="https://github.com/docsifyjs/awesome-docsify#plugins" target="_blank" rel="noopener noreferrer">docsify 插件列表</a>：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"><a href="https://notebook.js.org/#/README" target="_blank" rel="noopener noreferrer">docsify 笔记类参考</a>：看板娘，多级页面，页面点击效果，网站运行时间。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"><a href="https://github.com/827652549/docsify-count" target="_blank" rel="noopener noreferrer">docsify-count</a>：docsify 的字数和阅读时长插件。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"><a href="https://github.com/cxcn/docsify-waline/blob/main/README.zh-CN.md" target="_blank" rel="noopener noreferrer">docsify-waline</a>：提供评论功能的同时，借用 docsify-count 接口展示阅读量。暂时停止 1300 宽度的 waline 显示，避免页面显示异常。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"><a href="https://github.com/mrpotatoes/docsify-toc" target="_blank" rel="noopener noreferrer">docsify-toc</a>：给笔记页内部添加目录。不过本插件与 gitalk、waline 冲突，页面宽于 1300px 时出现 toc 目录，评论区位置也跟着挤到页面顶部，需手动修改。参考链接：<a href="https://tainacan.github.io/tainacan-wiki/#/general-concepts" target="_blank" rel="noopener noreferrer">Tainacan Wiki</a>，<a href="https://github.com/dromara/sureness/blob/master/docs/index.html" target="_blank" rel="noopener noreferrer">Sureness</a>，<a href="https://wiki.lifeupapp.fun/zh-cn/#/features/174" target="_blank" rel="noopener noreferrer">lifeupapp</a>。</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"><a href="https://github.com/meff34/docsify-to-pdf-converter" target="_blank" rel="noopener noreferrer">docsify-pdf-converter</a>：将 docsify 转为 pdf，不带书签目录。</label><ul><li><code>illegal operation on a directory</code> 报错：sidebar 中不要使用简写地址，将 <code>main/</code> 改为 <code>main/README.md</code>，否则将读取到目录而报错。</li><li><code>&#39;node_modules&#39; 不是内部或外部命令</code> 报错：将 package.json 的设置修改为 <code>&quot;convert&quot;: &quot;node_modules\\\\.bin\\\\docsify-pdf-converter&quot;</code>。这问题多发生在 Windows，是由 Windows 与 Linux 路径规则不同而引起的。</li></ul></li></ul><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="docsify-emoji" tabindex="-1"><a class="header-anchor" href="#docsify-emoji"><span>docsify emoji</span></a></h3><p><a href="https://docsify.js.org/#/zh-cn/plugins?id=emoji" target="_blank" rel="noopener noreferrer">emoji 插件</a>在标题中使用容易出错，建议使用 <code>&amp;#58;</code>。例如，原本是 <code>:100:</code>，替换为 <code>&amp;#58;100:</code>。</p><p>实际使用中，我直接复制 emoji，都能正常显示。</p><h2 id="本地命令" tabindex="-1"><a class="header-anchor" href="#本地命令"><span>本地命令</span></a></h2><p><a href="https://github.com/docsifyjs/docsify-cli" target="_blank" rel="noopener noreferrer">docsify 本地命令</a>:</p><p><code>&lt;path&gt;</code> 默认为当前路径，可使用子文件夹指定路径，如 <code>./docs</code> 或 <code>docs</code>。</p><p><code>[]</code> 为可省略命令区，无实际作用，输出时需要去除。</p><h3 id="serve-启动" tabindex="-1"><a class="header-anchor" href="#serve-启动"><span>Serve 启动</span></a></h3><p>若要在电脑上查看 docsify 页面，可执行 serve 架构命令，在本地主机上运行服务。默认本地端口为 3000，可以指定端口。</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docsify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> serve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h&gt; [--open </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [--port </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">3000]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用时不要关闭命令终端，否则 serve 也会停止。</p><h3 id="生成侧边栏" tabindex="-1"><a class="header-anchor" href="#生成侧边栏"><span>生成侧边栏</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docsify</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">pat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">h&gt; [--sidebar </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">_sidebar.md]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>generate 命令会遍历指定目录及其子目录的所有 markdown 文件，并生成全路径的 _sidebar.md。<code>&lt;path&gt;</code> 不能省略，需指定子文件夹路径。</p><p>如果路径中存在 _sidebar.md，则会报错。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="引用路径" tabindex="-1"><a class="header-anchor" href="#引用路径"><span>引用路径</span></a></h3><p>docsify 引用内部文件时，路径会自带添加域名。</p><p>例如：指向子文档时，链接是 <code>子文件夹/文档名.md</code>；指向子文档的小标题时，链接是 <code>子文件夹/文档名？id=小标题</code>。</p><h3 id="页面未同步更新" tabindex="-1"><a class="header-anchor" href="#页面未同步更新"><span>页面未同步更新</span></a></h3><blockquote><p>CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。</p><p>我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。</p><p>如果开启了 <code>relativePath: true</code>，文件可以找到，但是侧栏上边的标题点击又有点问题。</p></blockquote><h3 id="github-pages-报错" tabindex="-1"><a class="header-anchor" href="#github-pages-报错"><span>GitHub Pages 报错</span></a></h3><p>如果 SSL 链接 404 报错，显示「There isn&#39;t a GitHub Pages site here」，则目录中加入 <code>CNAME</code> 文件。</p>',29)]))}]]),o=JSON.parse('{"path":"/web/docsify.html","title":"docsify","lang":"zh-CN","frontmatter":{"article":false,"title":"docsify","icon":"simple-icons:docsify","order":2,"description":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...","head":[["meta",{"property":"og:url","content":"https://newzone.top/web/docsify.html"}],["meta",{"property":"og:site_name","content":"LearnData 开源笔记"}],["meta",{"property":"og:title","content":"docsify"}],["meta",{"property":"og:description","content":"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-25T03:35:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-25T03:35:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"docsify\\",\\"description\\":\\"docsify 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。 本页集中了我使用 docsify 中遇到的问题，新手先看 docsify 入门文档。 插件 docsify 插件列表： docsify 笔记类参考：看板娘，多级页面，页面点击效果，网站运行时间。 d...\\"}"]]},"headers":[{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"docsify emoji","slug":"docsify-emoji","link":"#docsify-emoji","children":[]}]},{"level":2,"title":"本地命令","slug":"本地命令","link":"#本地命令","children":[{"level":3,"title":"Serve 启动","slug":"serve-启动","link":"#serve-启动","children":[]},{"level":3,"title":"生成侧边栏","slug":"生成侧边栏","link":"#生成侧边栏","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"引用路径","slug":"引用路径","link":"#引用路径","children":[]},{"level":3,"title":"页面未同步更新","slug":"页面未同步更新","link":"#页面未同步更新","children":[]},{"level":3,"title":"GitHub Pages 报错","slug":"github-pages-报错","link":"#github-pages-报错","children":[]}]}],"git":{"createdTime":1727235326000,"updatedTime":1727235326000,"contributors":[{"name":"Mation97","email":"165622191+Mation97@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.71,"words":813},"filePathRelative":"web/docsify.md","localizedDate":"2024年9月25日","excerpt":"<p><a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify</a> 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。</p>\\n<p>本页集中了我使用 docsify 中遇到的问题，新手先看 <a href=\\"https://docsify.js.org/#/zh-cn/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">docsify 入门文档</a>。</p>","autoDesc":true}')}}]);