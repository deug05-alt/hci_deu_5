---
name: design
description: 점검을 마친 플로우와 와이어프레임을 바탕으로 디자인 방향을 정하고, 핵심 플로우 화면부터 차례로 실제처럼 눌러볼 수 있는 화면을 design/prototype.html 한 파일에 만든다. 화면마다 팀이 필요 여부를 판단하며 메뉴 구조의 모든 화면으로 넓혀간다. 한 번에 한 화면씩, 여러 번 쓴다. "/design 점검"으로 부르면 만든 화면 전체를 점검한다.
---

# 디자인 완성 (눌러보는 화면)

## 시작하며 설명할 것 (처음 한 번만)

> 지금까지 정한 기획과 와이어프레임에 색, 글꼴, 분위기를 입혀서 실제 앱처럼 눌러볼 수 있는 화면을 만들어요. 핵심 플로우 화면부터 하나씩 만들고, 그다음 나머지 화면으로 넓혀가요. 화면마다 정말 필요한지 우리가 먼저 판단해요. 다음 주 사용성 평가는 이 화면으로 해요.

**한 번 부를 때 화면은 하나만 만들어요.**

## 준비

- `docs/project-map.md`, `flow/flow.md` 를 읽으세요. `flow/plan-check.md` 가 없으면 `/plan-check` 를 먼저 하자고 한 번 권하세요. 팀이 그냥 가겠다고 하면 진행하세요.
- `design/` 폴더에 `style-guide.md`, `screens.md`, `prototype.html` 이 있으면 읽고 이어가세요. prototype.html 은 길어질 수 있으니 처음 부분(스타일과 공통 부분)과 지금 만들 화면 근처만 읽으세요.

## 1. 디자인 방향 (처음 한 번만)

하나씩 물으세요. 팀이 막히면 퍼소나에 어울리는 방향 2~3가지를 장단점과 함께 짧게 보여주세요. 고르는 건 팀이에요.

1. 서비스의 느낌을 형용사 세 개로 말하면? (예: 가볍다, 믿음직하다, 따뜻하다)
2. 주 색 하나와 강조 색 하나는? 이유는?
3. 글자 느낌은? (둥글고 친근한, 단정한 등) 기본 글꼴로 가능한 범위에서 고르게 하세요.
4. 모바일 앱인가요, PC 웹인가요? (지난번 와이어프레임이 어느 쪽인지 먼저 보여주세요)

정한 것은 `design/style-guide.md` 에 적으세요: 느낌 세 단어와 이유, 색(이름, 색상 코드, 쓰는 곳), 글자 크기 단계(제목, 본문, 보조), 모서리 둥글기, 버튼 모양, 기본 부품 목록(버튼, 입력칸, 카드, 상단 바, 하단 메뉴 중 우리 서비스에 쓰는 것).

- 글자색과 배경색은 잘 읽히게 대비를 충분히 두세요. 연한 회색 글자를 흰 배경에 쓰려고 하면 읽기 어렵다고 알려주세요.
- 정한 뒤 prototype.html 의 `:root` 색 값을 바꾸고, 기본 부품의 공통 스타일을 먼저 만들어 두세요. 스타일 가이드를 바꾸면 이 두 곳을 같이 고쳐요.

## 2. 화면 순서표 (처음 한 번만): design/screens.md

| 순서 | ID | 화면 이름 | 구분 | 팀 판단 | 이유 | 상태 |
|---|---|---|---|---|---|---|

- 순서: 핵심 플로우에 나오는 화면을 나오는 순서대로 먼저, 그다음 다른 플로우 화면, 마지막으로 메뉴 구조에만 있는 화면.
- 구분: 핵심, 보조, 메뉴에만.
- 팀 판단은 flow.md 점검표에서 가져오고, 비어 있으면 화면을 만들 차례가 됐을 때 물어요.
- 상태: 대기, 완료.

## 3. 화면 하나 만들기 (부를 때마다)

1. 순서표에서 다음 "대기" 화면을 고르세요. 학생이 이름을 말했으면 그 화면.
2. **필요 여부 묻기**: 팀 판단이 비어 있으면, 이 화면이 어느 플로우에 나오는지(또는 안 나오는지)와 비슷한 화면을 보여주고 물으세요: 만든다, 다른 화면과 합친다, 뺀다, 보류. 이유를 한 줄 받아 순서표에 적으세요. 만들기로 한 것만 다음으로 가요.
3. 그 화면의 와이어프레임 파일과 flow.md 의 해당 단계를 읽으세요. 와이어프레임이 없으면 `/add-screen` 의 네 가지 질문을 짧게 묻고 진행하세요.
4. `design/prototype.html` 의 `<!-- 화면 끝 -->` 바로 앞에 화면 하나를 `section` 으로 추가하세요. 파일 전체를 다시 쓰지 말고 그 자리에 끼워 넣으세요. 와이어프레임의 요소와 순서를 그대로 따르고, 스타일 가이드의 색과 글자를 쓰세요. 와이어프레임에 없는 요소는 넣지 말고 물어보세요.
5. 이동: 플로우의 다음 화면으로 가는 버튼은 `href="#ID"` 로 연결하세요. 아직 없는 화면도 같은 방식으로 걸어 두면, 누를 때 "아직 만들지 않은 화면이에요"가 떠요.
6. 피드백: 누르면 반응이 보이게 하세요 (눌림, 선택됨, 저장됐어요 같은 안내). 안내 문구는 `toast("저장됐어요")` 로 띄울 수 있어요.
   - 버튼과 누를 수 있는 것은 손가락으로 누르기 쉬운 크기(높이 44px 이상)로 만드세요.
   - flow.md 에서 이 화면의 갈림길(결과 없음, 오류 등)이 있으면 그 모습도 같은 section 안에 만들고, 화면 아래쪽 작은 버튼으로 바꿔 볼 수 있게 하세요. 예: "결과 없음 보기".
7. 순서표 상태를 "완료"로 바꾸세요.

학생에게 브라우저로 열어 보게 하세요 (윈도우 `start "" design\prototype.html`, 맥 `open design/prototype.html`). 고칠 점을 말하면 그 화면 `section` 만 고치세요.

## 4. 디자인 점검 ("/design 점검" 이라고 부를 때)

만든 화면 전체를 한 번에 점검해요. 화면을 새로 만들지 않아요.

- 스타일 가이드와 다른 색, 글자 크기, 버튼 모양을 쓴 화면이 있는지
- 같은 기능의 버튼 이름이 화면마다 다르지 않은지 (예: 저장, 완료, 확인이 섞임)
- 플로우의 모든 이동이 실제로 연결됐는지, 아직 안 만든 화면으로 가는 버튼이 몇 개인지
- 갈림길 모습(결과 없음, 오류)이 빠진 화면이 있는지
- 글자가 배경과 대비가 낮아 읽기 어려운 곳, 너무 작은 버튼이 있는지

찾은 것을 표로 보여주고, 무엇을 고칠지 팀이 고르게 하세요. 고친 것은 순서표 아래 "점검 기록"에 남기세요.

## prototype.html 뼈대 (파일이 없을 때 한 번만 만들기)

```html
<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>서비스 이름 프로토타입</title>
<style>
:root{--main:#3366ff;--accent:#ff7a45;--bg:#ffffff;--text:#1d1d1f;--sub:#6b6b70;--line:#e5e5ea;--radius:12px}
*{box-sizing:border-box}body{margin:0;background:#eceef1;font-family:system-ui,"Apple SD Gothic Neo","Malgun Gothic",sans-serif;color:var(--text)}
.device{width:390px;max-width:100%;min-height:780px;margin:24px auto;background:var(--bg);border-radius:28px;box-shadow:0 8px 30px rgba(0,0,0,.12);overflow:hidden;position:relative}
.screen{display:none;min-height:780px}.screen.on{display:block}
#toast{position:fixed;left:50%;bottom:32px;transform:translateX(-50%);background:#222;color:#fff;padding:10px 16px;border-radius:20px;font-size:14px;opacity:0;transition:.2s;pointer-events:none}#toast.on{opacity:1}
#idx{position:fixed;right:16px;top:16px;font-size:13px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:8px 12px;cursor:pointer}
#list{position:fixed;right:16px;top:56px;background:#fff;border:1px solid var(--line);border-radius:12px;padding:8px;display:none;max-height:70vh;overflow:auto;min-width:200px}#list.on{display:block}#list a{display:block;padding:6px 8px;color:var(--text);text-decoration:none;font-size:14px;border-radius:8px}#list a:hover{background:#f2f2f5}
/* 공통 부품 스타일은 여기 아래에 */
</style></head><body>
<button id="idx">화면 목록</button><div id="list"></div>
<div class="device">
<!-- 화면은 여기에 하나씩 추가: <section class="screen" id="1.0" data-name="홈"> ... </section> -->
<!-- 화면 끝 -->
</div>
<div id="toast"></div>
<script>
const S=[...document.querySelectorAll(".screen")],L=document.getElementById("list"),T=document.getElementById("toast");
L.innerHTML=S.map(s=>`<a href="#${s.id}">${s.id} ${s.dataset.name||""}</a>`).join("");
document.getElementById("idx").onclick=()=>L.classList.toggle("on");
function toast(m){T.textContent=m;T.classList.add("on");clearTimeout(T._t);T._t=setTimeout(()=>T.classList.remove("on"),1600)}
function show(){const id=decodeURIComponent(location.hash.slice(1));const t=S.find(s=>s.id===id)||S[0];if(id&&!S.some(s=>s.id===id))toast("아직 만들지 않은 화면이에요");S.forEach(s=>s.classList.toggle("on",s===t));L.classList.remove("on");window.scrollTo(0,0)}
addEventListener("hashchange",show);show();
</script></body></html>
```

- PC 웹이면 `.device` 의 `width:390px` 를 `width:1200px` 로, `border-radius:28px` 를 `8px` 로, `min-height` 두 곳을 `720px` 로 바꾸세요.
- 스타일 가이드를 정하면 `:root` 의 색 값만 바꾸세요.
- 버튼, 카드 같은 부품은 처음 만들 때 공통 스타일로 정의하고, 다음 화면부터 같은 이름을 다시 쓰세요. 그래야 파일이 덜 길어지고 화면끼리 통일돼요.
- 외부 이미지와 글꼴은 쓰지 마세요. 사진 자리는 회색 상자에 설명 글로 두세요.
- 이 한 파일만으로 열려야 해요. 다른 파일을 불러오지 마세요. 나중에 아티팩트로 공유할 때 필요해요.

## 마무리

- 저장하고 GitHub에 올리라고 알려주세요.
- 순서표에서 다음 화면을 알려주세요. 핵심 플로우 화면을 다 만들었으면 "핵심 플로우를 처음부터 끝까지 눌러보세요"라고 하고, 그다음 나머지 화면으로 넓혀가자고 하세요.
- "화면 몇 개마다 새 세션으로 시작하면 사용량을 아낄 수 있어요."
- 핵심 플로우를 다 만들었으면 `/design 점검` 을 한 번 권하세요.
- 공유할 준비가 되면 `/share` 를 안내하세요.
