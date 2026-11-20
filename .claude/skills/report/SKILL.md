---
name: report
description: 오늘(또는 지금까지) 한 작업을 보고서에 넣을 한 장짜리 요약판으로 만든다. 서비스 요약, 핵심 플로우 그림, 기획 점검 결과, 디자인 방향, 주요 화면, 결정과 이유를 report/summary.html 한 장에 담고, 그 안의 버튼으로 이미지(PNG)로 저장한다. 수업이 끝날 때나 보고서를 쓸 때 쓴다.
---

# 보고서용 한 장 요약판

## 시작하며 설명할 것

> 오늘 한 일을 보고서에 넣을 수 있게 한 장으로 정리할게요. 우리가 이미 정해서 파일에 남긴 내용만 모아요. 새로 지어내는 내용은 없어요. 다 만들면 브라우저에서 버튼 하나로 이미지로 저장할 수 있어요.

## 준비 (필요한 부분만 읽기)

- `docs/project-map.md`: 서비스 이름, 컨셉
- `flow/flow.md`: 핵심 플로우 표, 화면 점검표, 결정 기록
- `flow/plan-check.md`: 판정 표, 결정
- `design/style-guide.md`, `design/screens.md`
- `design/prototype.html`: `<style>` 부분과 핵심 플로우 화면 `section` 만
- 없는 파일이 있으면 그 칸은 "아직 하지 않았어요"로 두고 계속하세요. 없는 내용을 채워 넣지 마세요.
- 팀 이름과 팀원 이름을 모르면 한 번 물어보세요.

## 담을 내용 (파일에 있는 것만, 짧게)

1. 머리: 서비스 이름, 컨셉 한 문장, 팀 이름과 팀원, 날짜
2. 오늘 한 일: 자료 지도, 서비스 플로우, 기획 점검, 디자인 네 단계마다 결과를 한 줄씩. 숫자가 있으면 숫자로 (플로우 2개, 화면 9개 중 6개 필요로 판단, 화면 5개 완성)
3. 핵심 플로우: flow.html 의 핵심 플로우 그림 한 덩어리를 그대로
4. 기획 점검: 핵심 기능별 판정(들어감, 약함, 빠짐)과, 그래서 고친 것 최대 3가지
5. 디자인 방향: 느낌 세 단어, 색(색 칩과 색상 코드), 글자
6. 주요 화면: 핵심 플로우 화면을 나오는 순서대로 최대 4개, 화면 이름과 함께
7. 우리가 내린 결정과 이유: 가장 중요한 것 3가지. 어떤 것을 넣을지는 팀에게 물어보세요. 결정 기록에서 후보를 5개쯤 보여주고 고르게 해요.
8. 다음에 할 일: 2~3가지

글은 팀이 파일에 남긴 표현을 그대로 쓰고, 칸마다 넘치지 않게 줄이세요. 줄일 때 뜻을 바꾸지 마세요.

## 만들기: report/summary.html

아래 뼈대를 그대로 쓰고, `여기` 로 표시한 곳만 채우세요.

```html
<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>한 장 요약</title>
<style id="proto-style">
/* 여기: design/prototype.html 의 <style> 내용을 그대로 붙여 넣기. 파일이 없으면 비워 두기 */
</style>
<style>
html,body{margin:0;background:#e9eaee;font-family:system-ui,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;color:#1d1d1f}
#rp-bar{position:sticky;top:0;z-index:5;display:flex;gap:12px;align-items:center;padding:10px 16px;background:#1d1d1f;color:#fff;font-size:14px}
#rp-bar button{font:inherit;font-weight:600;padding:8px 16px;border:0;border-radius:8px;background:#fff;color:#1d1d1f;cursor:pointer}
#rp-board{width:1600px;margin:20px auto;background:#fff;padding:40px 44px;box-sizing:border-box;display:grid;grid-template-columns:repeat(12,1fr);gap:20px}
.rp-head{grid-column:1/-1;display:flex;justify-content:space-between;align-items:flex-end;gap:24px;border-bottom:3px solid #1d1d1f;padding-bottom:16px}
.rp-head h1{margin:0;font-size:40px;line-height:1.15}.rp-head p{margin:6px 0 0;font-size:19px;color:#444}.rp-meta{text-align:right;font-size:15px;color:#555;white-space:nowrap}
.rp-card{border:1px solid #d9d9de;border-radius:14px;padding:18px 20px;min-width:0;background:#fff}
.rp-card h2{margin:0 0 10px;font-size:15px;letter-spacing:.04em;color:#666;font-weight:600}
.rp-card ul,.rp-card ol{margin:0;padding-left:20px;font-size:16px;line-height:1.55}.rp-card p{margin:0;font-size:16px;line-height:1.55}
.rp-steps{grid-column:1/-1;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.rp-step{border-radius:12px;background:#f3f4f7;padding:14px 16px}.rp-step b{display:block;font-size:17px;margin-bottom:4px}.rp-step span{font-size:15px;color:#333;line-height:1.5}
.rp-flow{grid-column:1/-1}.rp-flow .mermaid{margin:0;text-align:center}.rp-flow svg{max-width:100%;height:auto}
.rp-check{grid-column:span 5}.rp-design{grid-column:span 3}.rp-decide{grid-column:span 4}
.rp-table{width:100%;border-collapse:collapse;font-size:15px}.rp-table td,.rp-table th{border-top:1px solid #e3e3e8;padding:6px 6px;text-align:left;vertical-align:top}
.rp-tag{display:inline-block;padding:1px 8px;border-radius:999px;font-size:13px;font-weight:600}.rp-ok{background:#e2f4e6;color:#1c6b2f}.rp-weak{background:#fff0d6;color:#8a5a00}.rp-miss{background:#ffe3e0;color:#a3261a}
.rp-chips{display:flex;flex-wrap:wrap;gap:10px;margin:8px 0}.rp-chip{display:flex;align-items:center;gap:8px;font-size:14px}.rp-chip i{width:28px;height:28px;border-radius:8px;border:1px solid #0002;display:inline-block}
.rp-screens{grid-column:span 8}.rp-next{grid-column:span 4}
.rp-shots{display:flex;gap:18px;flex-wrap:wrap}.rp-shotbox{width:195px}.rp-shotbox figcaption{font-size:14px;margin-top:8px;text-align:center;color:#333}
.rp-shot{width:195px;height:390px;overflow:hidden;border:1px solid #cfcfd6;border-radius:16px;background:#fff;position:relative}
.rp-shot>.screen{display:block!important;width:390px;min-height:780px;transform:scale(.5);transform-origin:0 0;pointer-events:none}
.rp-empty{color:#888;font-size:15px}
</style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script>
</head><body>
<div id="rp-bar"><button id="rp-save">이미지로 저장</button><span id="rp-msg">아래 한 장이 그대로 이미지가 돼요.</span></div>
<div id="rp-board">
 <header class="rp-head"><div><h1>여기: 서비스 이름</h1><p>여기: 컨셉 한 문장</p></div><div class="rp-meta">여기: 팀 이름<br>여기: 팀원 이름들<br>여기: 날짜</div></header>
 <section class="rp-steps">
  <div class="rp-step"><b>1. 자료 지도</b><span>여기</span></div>
  <div class="rp-step"><b>2. 서비스 플로우</b><span>여기</span></div>
  <div class="rp-step"><b>3. 기획 점검</b><span>여기</span></div>
  <div class="rp-step"><b>4. 디자인</b><span>여기</span></div>
 </section>
 <section class="rp-card rp-flow"><h2>핵심 플로우</h2><pre class="mermaid">
여기: flow.html 의 핵심 플로우 그림 내용
 </pre></section>
 <section class="rp-card rp-check"><h2>기획 점검 결과</h2><table class="rp-table"><tr><th>핵심 기능</th><th>판정</th><th>그래서</th></tr>
  <tr><td>여기</td><td><span class="rp-tag rp-ok">들어감</span></td><td>여기</td></tr>
 </table></section>
 <section class="rp-card rp-design"><h2>디자인 방향</h2><p>여기: 느낌 세 단어</p><div class="rp-chips"><span class="rp-chip"><i style="background:#3366ff"></i>주 색 #3366ff</span></div><p>여기: 글자</p></section>
 <section class="rp-card rp-decide"><h2>우리가 내린 결정과 이유</h2><ol><li>여기: 결정. 이유</li></ol></section>
 <section class="rp-card rp-screens"><h2>주요 화면 (핵심 플로우 순서)</h2><div class="rp-shots">
  <figure class="rp-shotbox" style="margin:0"><div class="rp-shot">여기: prototype.html 의 화면 section 을 그대로 복사 (id 는 지우기)</div><figcaption>여기: 1.0 홈</figcaption></figure>
 </div></section>
 <section class="rp-card rp-next"><h2>다음에 할 일</h2><ul><li>여기</li></ul></section>
</div>
<script>
mermaid.initialize({startOnLoad:true,theme:"neutral",flowchart:{htmlLabels:false}});
document.getElementById("rp-save").onclick=async()=>{const m=document.getElementById("rp-msg");
 if(!window.html2canvas){m.textContent="인터넷이 안 돼서 저장 도구를 못 불러왔어요. 화면 캡처로 저장하세요.";return}
 m.textContent="만드는 중이에요.";
 try{const c=await html2canvas(document.getElementById("rp-board"),{scale:1.5,backgroundColor:"#ffffff",useCORS:true});
  const a=document.createElement("a");a.download="summary.png";a.href=c.toDataURL("image/png");a.click();m.textContent="summary.png 로 저장했어요. 다운로드 폴더를 확인하세요."}
 catch(e){m.textContent="저장하지 못했어요. 화면 캡처로 저장하세요."}};
</script></body></html>
```

채울 때 지킬 것:

- 판정 표시는 `rp-ok`(들어감), `rp-weak`(약함), `rp-miss`(빠짐) 중 맞는 것을 쓰세요.
- 주요 화면은 `figure` 덩어리를 화면 수만큼 반복하세요. 복사한 `section` 에서 `id` 는 지우고 `class="screen"` 은 남기세요. PC 웹 서비스면 `.rp-shot` 의 크기를 `width:390px;height:234px`, `.rp-shot>.screen` 을 `width:1200px;min-height:720px;transform:scale(.325)`, `.rp-shotbox` 를 `width:390px` 로 바꾸세요.
- 아직 만든 화면이 없으면 그 칸에 `<p class="rp-empty">아직 만든 화면이 없어요</p>` 를 넣으세요. 다른 칸도 내용이 없으면 같은 방식으로 표시하세요.
- 핵심 플로우 그림은 flow.html 의 그 덩어리(`flowchart` 로 시작하는 부분)를 그대로 옮기세요.
- 뼈대의 스타일과 스크립트는 고치지 마세요.

## 확인과 저장

1. 학생에게 브라우저로 열어 보라고 하세요 (윈도우 `start "" report\summary.html`, 맥 `open report/summary.html`).
2. 글이 칸을 넘치거나 잘린 곳이 있는지 물어보고, 있으면 그 칸의 글만 줄이세요.
3. 맨 위 **이미지로 저장** 버튼을 누르면 `summary.png` 가 다운로드 폴더에 생긴다고 알려주세요. 버튼이 안 되면 브라우저 화면을 캡처하라고 안내하세요 (윈도우 `윈도우 키 + Shift + S`, 맥 `Cmd + Shift + 4`).
4. 저장한 이미지를 `report/` 폴더에 옮겨 두면 GitHub에도 같이 올라간다고 알려주세요.

## 마무리

- 저장하고 GitHub에 올리라고 알려주세요.
- 다음 수업에서 내용이 늘어나면 `/report` 를 다시 불러 같은 파일을 고치면 된다고 알려주세요.
