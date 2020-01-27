import { compileTemplate } from "../helpers";

export default ({ templateParams, ...params }) =>
  compileTemplate({
    ...params,
    imageSize: { height: 700, width: 700 }, // Square - enough for standard width of 610px + 10%
    templateParams,
    body: `
<div class="social{{#if split}} social--{{split}}-split{{/if}}{{#if logo}} social--has-logo{{/if}}{{#if subtitle}} social--has-subtitle{{/if}}">
  
  <div class="content ">
      <div class="content-inner">
        {{#if logo}}<div><img class="logo" src="{{logo}}" /></div>{{/if}}
        <h1 class="truncate">{{title}}</h1>
        <h2 class="truncate">{{subtitle}}</h2>
      </div>
      
      <div class="footer">{{footer}}</div>
  </div>

  {{#if imageUrl}}<div class="image" style="background-image: url('{{imageUrl}}');" />{{/if}}
</div>  
    `,
    styles: `
:root {
    --split-width: 7.5%;
    --split-absolute-width: calc((100% + var(--split-width)) / 2);
}

.social {
  display: flex;
  height: 100%;
}

.social--diagonal-split .content {
    clip-path: polygon(0 0, 86% 0%, 100% 100%, 0% 100%)
}

.social--diagonal-split .content-inner {
    padding-right: 16%;
}

.social--diagonal-reverse-split .content {
    clip-path: polygon(0 0, 100% 0%, 86% 100%, 0% 100%)
}

.social--diagonal-reverse-split .content-inner {
    padding-right: 16%;
}

.content {
  background: white;
  display: flex;
  flex-direction: column;
  position:absolute;
  width: 50%;
  height: 100%;
}

.social--diagonal-split .content, .social--diagonal-reverse-split .content {
  width: var(--split-absolute-width);
}

.content-inner {
  flex-grow: 1;
  padding: 40px;
  padding-bottom: 20px;
  overflow: hidden;
}

.logo {
    height: 72px;
    margin-bottom: 8px;
}

.image {
  background: lightgray;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 50%;
  margin-left: 50%;

}

.social--diagonal-split .image, .social--diagonal-reverse-split .image {
  width: var(--split-absolute-width);
  margin-left: calc(100% - var(--split-absolute-width));
}


.truncate {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}


h1 {
  font-size: 64px;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 800;
  -webkit-line-clamp: 6;
}

.social--has-logo h1 {
    -webkit-line-clamp: 5;
}

.social--has-subtitle h1 {
    -webkit-line-clamp: 3;
}

.social--has-subtitle.social--has-logo h1 {
  font-size: 56px;
  -webkit-line-clamp: 3;
}

h2 {
  font-size: 40px;
  -webkit-line-clamp: 4;
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 500;
}

.social--has-logo h2 {
  -webkit-line-clamp: 3;
}

.footer {
    opacity: 0.75;
  font-size: 32px;
    font-weight: 800;
  padding: 40px;
  padding-top: 0px;
}
  `
  });
