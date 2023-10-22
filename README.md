<p align="middle" >
  <img width="100px;" src="https://em-content.zobj.net/thumbs/160/apple/81/artist-palette_1f3a8.png"/>
</p>
<h2 align="middle">프론트엔드의 렌더링 방식</h2>
<p align="middle">내 서비스의 클론 코딩을 통해 프론트엔드 렌더링 방식 이해하기</p>
<br/>

# 🧐 렌더링 방식의 분석

### CSR와 ISR 렌더링 시점 분석

- CSR : 서버로부터 HTML 문서와 번들을 로드하여 클라이언트에서 렌더링을 진행합니다.
- ISR : ISR는 페이지 요청과는 무관하게 캐시 주기에 따라 미리 렌더링하여 정적인 문서로 만들어 저장합니다.

### 떡볶이로 알아보는 렌더링 방식과 사용자 경험(UX) 측면 분석

쉽게 떡볶이에 비유하자면 CSR의 경우 주문을 하면 고객의 자리에서 조리를 하는 즉석떡볶이 방식이고, ISR은 포장마차에서 판매하는 떡볶이처럼 미리 만들어 놓고 적정 주기에 따라 다시 만드는 방식입니다.
SSR은 주문시에 주방에서 조리되어 나오는 김밥천국 떡볶이가 될 수 있겠네요

CSR의 경우 고객 주문시에 냄비(html)과 떡볶이 재료 및 조리기구(번들)을 주방(서버)에서 가져오는데 시간이 걸려요.
더불어 떡볶이를 조리(렌더링)하는데에도 시간이 걸립니다.
반면 ISR의 경우 이미 만들어져있는(렌더링된) 떡볶이이기 때문에 CSR에 비해 속도가 매우 빠릅니다.
그래서 ISR방식이 초기페이지 렌더링 측면에서 UX가 더 월등하다고 볼 수 있습니다.

### 성능 측정 및 비교

LightHouse 성능 측정 결과를 비교하면 다음과 같습니다.
왼쪽 사진이 CSR, 오른쪽 사진이 ISR방식입니다.

<img height="500" alt="스크린샷 2023-10-16 오후 2 04 23" src="https://github.com/shackstack/next-celuveat/assets/102432453/3ad3308d-9e7a-41d9-a1c0-3992f2fd096c">
<img height="500" alt="스크린샷 2023-10-16 오후 2 04 08" src="https://github.com/shackstack/next-celuveat/assets/102432453/30093dbb-f8d0-4d4a-aeb7-9dc8a82d4080">

이미 셀럽잇 서비스의 성능을 개선시켜서 100점이지만 세부지표를 비교해보면 전체적으로 더 향상된 것을 확인할 수 있습니다.
