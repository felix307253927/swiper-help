/**
 * @author Created by felix on 18-1-11.
 * @email   307253927@qq.com
 */
'use strict';

export function swiperAnimateCache() {
  for (let allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++)allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("data-animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("data-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
}
export function swiperAnimate(a) {
  clearSwiperAnimate();
  let b = a.slides[a.activeIndex].querySelectorAll(".ani");
  for (let i = 0, effect, style, duration,delay; i < b.length; i++)b[i].style.visibility = "visible", effect = b[i].attributes["data-animate-effect"] ? b[i].attributes["data-animate-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["data-animate-duration"] ? b[i].attributes["data-animate-duration"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = b[i].attributes["data-animate-delay"] ? b[i].attributes["data-animate-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), b[i].setAttribute("style", style)
}
function clearSwiperAnimate() {
  for (let allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0, effect, style; i < allBoxes.length; i++)allBoxes[i].attributes["data-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["data-animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["data-animate-effect"] && (effect = allBoxes[i].attributes["data-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
}

export default {swiperAnimate, swiperAnimateCache};