---
name: flow
description: 주요 사용 시나리오마다 사용자가 거치는 화면과 행동, 갈림길을 이은 서비스 플로우를 팀과 함께 만들고 점검한다. flow/flow.md에 기록하고 flow/flow.html로 그림을 보여준다. 시나리오를 하나씩 추가하거나 고칠 때 여러 번 쓴다.
---

# 서비스 플로우 만들기와 점검

## 시작하며 설명할 것 (처음 한 번만)

> 서비스 플로우는 사용자가 목표를 이루기까지 어떤 화면에서 무엇을 누르고 어디로 가는지 이어 그린 흐름도예요. 메뉴 구조도가 "어떤 화면이 어디에 있나"라면, 플로우는 "사용자가 실제로 어떤 순서로 지나가나"예요. 중간에 길이 갈리는 곳(로그인이 안 됐을 때, 결과가 없을 때)도 같이 그려요.

## 준비

- `docs/project-map.md` 를 읽으세요. 없으면 `/project-map` 부터 하자고 하고 멈추세요.
- 지도에 적힌 기획서의 시나리오 부분과 퍼소나만 읽으세요. 와이어프레임은 화면 이름만 알면 되니 열지 마세요.
- `flow/flow.md` 가 있으면 읽고 이어가세요.

## 1. 시나리오 고르기

- 기획서의 주요 사용 시나리오를 보여주고, 가장 중요한 것(핵심 플로우) 하나부터 하자고 하세요. 고르는 건 팀이에요.
- 기획서에 시나리오가 없으면, 퍼소나가 서비스로 이루려는 목표를 하나 정하게 하고 그걸 시나리오로 쓰세요. 기획서에도 넣을지 물어보세요.

## 2. 한 단계씩 이어 그리기 (질문은 한 번에 하나씩)

시나리오의 처음부터 끝까지 이 질문을 반복하세요.

1. 사용자는 어느 화면에서 시작하나요? (앱을 연 순간, 알림을 누른 순간 등)
2. 이 화면에서 무엇을 보고, 무엇을 누르나요?
3. 누르면 어느 화면으로 가나요?
4. 여기서 길이 갈릴 수 있나요? (로그인 안 됨, 결과 없음, 입력 실수, 취소)

- 화면은 지도의 화면 ID와 이름으로 부르세요. 지도에 없는 화면이 필요해지면 "새 화면"으로 표시하고 계속 가세요.
- 팀이 답할 때마다 `flow/flow.md` 를 바로 고치고, 끝까지 가면 `flow/flow.html` 을 만들어 보여주세요.

## 3. 저장 형식

`flow/flow.md`:

```
# 서비스 플로우

## 플로우 1: (시나리오 이름) [핵심]
퍼소나: / 목표:
| 단계 | 화면 (ID) | 사용자 행동 | 다음 화면 | 갈림길 |
|---|---|---|---|---|
| 1 | 홈 (1.0) | 오늘 추천 옷을 본다 | 추천 상세 (2.1) | 위치 권한 없음: 지역 선택 (새 화면) |

## 전체 서비스 플로우
모든 플로우를 합친 한 장이에요. 화면마다 어디서 들어오고 어디로 나가는지 적어요.
| 화면 (ID) | 들어오는 곳 | 나가는 곳 | 나오는 플로우 |
|---|---|---|---|

## 화면 점검표
| ID | 화면 이름 | 나오는 플로우 | 와이어프레임 | 팀 판단 | 이유 |
|---|---|---|---|---|---|

## 결정 기록
| 날짜 | 결정 | 이유 |
```

`flow/flow.html`: 브라우저로 여는 그림 파일이에요. 아래 뼈대를 그대로 쓰고, 플로우마다 `pre class="mermaid"` 한 덩어리만 바꾸세요. 다시 그릴 때는 바뀐 플로우 덩어리만 고치세요.

```html
<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>서비스 플로우</title>
<style>body{font-family:system-ui,sans-serif;margin:0;padding:24px;background:#fafaf8;color:#222}h1{font-size:22px}h2{font-size:17px;margin:32px 0 6px}.box{background:#fff;border:1px solid #ddd;border-radius:12px;padding:16px;overflow-x:auto}.lg{font-size:13px;color:#555}.lg span{display:inline-block;margin-right:14px}.lg i{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:4px;vertical-align:-1px}</style>
<script src="https://cdn.jsdelivr.net/npm/mermaid@10.9.1/dist/mermaid.min.js"></script></head><body>
<h1>서비스 이름 서비스 플로우</h1>
<p class="lg"><span><i style="background:#e8f1ff;border:1px solid #4a7fd6"></i>와이어프레임 있음</span><span><i style="background:#fff4e0;border:1px dashed #d68a1a"></i>와이어프레임 없음</span><span><i style="background:#ffecec;border:1px dashed #c44"></i>새 화면</span></p>
<h2>플로우 1: 시나리오 이름 (핵심)</h2>
<div class="box"><pre class="mermaid">
flowchart LR
  A["홈 1.0"] -->|"추천 보기"| B["추천 상세 2.1"]
  A -.->|"위치 권한 없음"| N1["지역 선택 (새 화면)"]
  classDef has fill:#e8f1ff,stroke:#4a7fd6
  classDef none fill:#fff4e0,stroke:#d68a1a,stroke-dasharray:4
  classDef new fill:#ffecec,stroke:#c44,stroke-dasharray:4
  class A,B has
  class N1 new
</pre></div>
<script>mermaid.initialize({startOnLoad:true,theme:"neutral",flowchart:{htmlLabels:true}})</script>
</body></html>
```

- 상자의 이름표(A, B, N1)는 영문과 숫자로만 짓고, 같은 화면은 모든 플로우에서 같은 이름표를 쓰세요 (예: 1.0 홈은 늘 S1_0).
- 상자 이름은 "화면 이름 ID" 로, 화살표 글은 사용자 행동으로 쓰세요. 갈림길은 점선 화살표(`-.->`)로 그리세요.
- 상자 글자에 큰따옴표, 괄호 외의 특수문자는 쓰지 마세요. 그림이 깨질 수 있어요.
- 다 쓴 뒤에는 mermaid 문법이 맞는지 한 번 더 확인하세요. 화살표마다 앞뒤 상자가 있는지, 따옴표가 짝이 맞는지, classDef 와 class 줄이 맨 아래에 있는지 보세요. 학생이 그림 대신 빨간 오류 글이 보인다고 하면 그 플로우 덩어리만 다시 확인해 고치세요.
- 만든 뒤 학생에게 브라우저로 열어 보라고 하세요 (윈도우 `start "" flow\flow.html`, 맥 `open flow/flow.html`). 고친 뒤에는 브라우저에서 새로고침하라고 하세요.

## 4. 점검 (플로우 하나가 끝날 때마다)

그림을 같이 보며 하나씩 물어보세요.

- 목표까지 몇 번 눌러야 하나요? 줄일 수 있는 단계가 있나요?
- 막다른 곳(다음으로 갈 수 없는 화면)이 있나요?
- 갈림길에서 사용자가 다시 원래 길로 돌아올 수 있나요?
- 퍼소나 입장에서 헷갈릴 만한 곳은 어디예요? 근거가 되는 인터뷰 내용을 같이 보여주세요.

고치기로 한 것은 flow.md 와 flow.html 에 반영하고 결정 기록에 남기세요.

## 5. 전체 서비스 플로우와 화면 점검표

- 핵심 플로우가 끝나면 다른 시나리오도 같은 방법으로 하자고 하세요. 시간이 부족하면 핵심 플로우 하나만으로도 다음 단계로 갈 수 있다고 알려주세요.
- 플로우를 두 개 이상 그렸으면 flow.md 의 "전체 서비스 플로우" 표를 채우고, flow.html 맨 위에 "전체 서비스 플로우" 그림을 하나 넣으세요. 모든 플로우의 화면과 화살표를 한 그림에 합치고, 같은 화살표는 한 번만 그려요. 핵심 플로우의 화살표는 굵게(`==>`) 그리세요. 화면이 많으면 1뎁스 메뉴별로 `subgraph` 로 묶으세요.
- 전체 그림을 보며 점검하세요: 들어오는 길이 없는 화면(사용자가 갈 수 없는 화면), 나가는 길이 없는 화면(막다른 곳), 홈으로 돌아올 수 없는 화면이 있나요? 있으면 보여주고 어떻게 할지 팀에게 물으세요.
- 플로우를 다 그렸으면 "화면 점검표"를 채우세요. 지도의 모든 화면과 새 화면을 한 줄씩 넣고, 어느 플로우에 나오는지, 와이어프레임이 있는지 적으세요.
- 어느 플로우에도 안 나오는 화면, 와이어프레임이 없는 화면을 따로 보여주고, 화면마다 팀이 판단하게 하세요: 필요하다, 다른 화면과 합친다, 뺀다, 보류. 이유를 한 줄 꼭 받으세요. 대신 정하지 마세요.

## 마무리

- 저장하고 GitHub에 올리라고 알려주세요.
- 와이어프레임이 없는데 "필요하다"로 정한 화면이 있으면 `/add-screen`, 없으면 `/plan-check` 로 넘어가라고 알려주세요.
