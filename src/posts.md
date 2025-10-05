---
layout: page
title: Posts
---
<div class="skillsTitle">
    <p>
        <span class="gradientText">Posts</span>
    </p>
</div>
<section class="content">
    <ul class="postsList">{{ join(map(dir("posts"), file, apply_layout(file, "card"))) }}</ul>
</section>