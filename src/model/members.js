/**
 * Member data
 */
function Member(id, stageName, name, position, birth, description, instaID, album, broadcast) {
    this.id = id;
    this.stageName = stageName;
    this.name = name;
    this.position = position;
    this.birth = birth;
    this.description = description;
    this.instaID = instaID;
    this.album = album;
    this.broadcast = broadcast;
}

const Shownu = new Member("shownu", "Shownu", "손현우", "리더, 메인댄서, 리드보컬", "1991-06-18",
    "오랜 연습생 기간과 댄서 경력을 바탕으로 발군의 댄스 실력을 자랑하고 가창력 또한 안정되어 있다. 무대에서는 우월한 피지컬을 바탕으로 섹시함을 뿜어낸다. 현직 아이돌이 뽑은 몸 1위를 차지한 적도 있을 정도. 그러나 무대 아래에서는 어딘가 허술한 모습을 보이기도 하는데, 이런 반전이 바로 매력 요소. 예명인 셔누(SHOWNU)는 'SHOW + NEW'의 합성어로 '새로운 쇼'라는 뜻을 가지고 있다. 장난을 좋아하고 위트 있는 성격이지만 특유의 진지함을 갖고 있고 끝까지 가만히 듣고 있다 마지막에 뜬금포 터뜨리길 좋아하는 엉뚱한 면모를 가지고 있다.",
    "shownuayo", null, null)
const Minhyuk = new Member("minhyuk", "Minhyuk", "이민혁", "보컬", "1993-11-3",
    "맑고 담백한 미성과 동시에 허스키한 보이스를 가진 독특한 보컬을 지니고 있다. 음역대도 넓으며 중고음에서 음색이 가장 잘 드러난다. 동그랗고 강아지 같은 맑은 눈, 높은 콧대, 귀여운 입술, 진한 눈썹과 뚜렷한 턱선의 잘생긴 얼굴로 팀 내 비주얼 중 한 명이다. 왼쪽 얼굴과 오른쪽 얼굴의 느낌이 다른 편이다. 왼쪽 얼굴은 짙은 쌍꺼풀 때문에 예쁘장하고 오른쪽 얼굴은 무쌍 때문인지 잘생겼다. 말 재간이 좋고 성격이 활발한 데다 분위기를 잘 이끄는 편으로 애드리브도 좋은 타이밍에 할 줄 알고 목소리 톤도 높은 편이라 팀 내 분위기 메이커로 활약한다.비현실적인 외모와는 달리 솔직하고 친근한 멘트, 풍부한 리액션 등으로 각종 예능에서 특히 사랑받고 있다."
    , "go5rae", null, [{ title: "보그싶쇼 시즌1", id: "bgss1", imgSrc: "bgss_1.jpeg" }, { title: "보그싶쇼 시즌2", id: "bgss2", imgSrc: "bgss_2.jpeg" }])
const Kihyun = new Member("kihyun", "Kihyun", "유기현", "메인보컬", "1993-11-22",
    "자타공인 케이팝의 신, 몬스타엑스와 몬베베의 자부심. 성량이 굉장히 크고 목소리가 맑고 청량하여 호불호가 갈리지 않는 보컬 스타일이며, 음정 역시 안정되어 있고 고음 처리 또한 매우 깔끔한 편이다. 무엇보다 기현의 보컬 실력이 드러나는 대목은 몬스타엑스의 춤이 매우 힘든데도 불구하고 춤을 추면서 흔들리지 않는 보컬 실력을 보여준다는 점이다. 무대에서도 춤을 추면서 고음과 애드립을 거의 원곡 그대로 소화한다. 본인이 락을 좋아해서인지 락 장르의 커버곡이 많은 편인데, 몬스타엑스 노래에서 기현의 보컬과는 또 다른 매력을 느낄 수 있다.그리고 2022년 3월 15일 발표한 싱글 1집의 타이틀 곡 VOYAGER로 '유기락'의 면모를 확실히 드러냈다.",
    "yookihhh", [{ title: "voyager", id: "voyager", imgSrc: "voyager.jpeg" }, { title: "youth", id: "youth", imgSrc: "youth.jpeg" }], [{ title: "심야아이돌", id: "midnightIdol", imgSrc: "midnightIdol.jpeg" }, { title: "play!", id: "play", imgSrc: "play.jpeg" }])
const Hyungwon = new Member("hyungwon", "Hyungwon", "채형원", "리드댄서, 보컬", "1994-01-15",
    "몬스타엑스의 비주얼. 명실공히 멤버 전원에게 인정받는 얼굴이다. 언제나 어디서나 멤버들이 뽑는 부동의 비주얼 1위를 담당한다. 몬스타엑스 내 최장신이자 다리가 매우 길고 머리도 작아 9등신이라는 만화에서나 볼 법한 이상적인 비율을 가지고 있다. 이러한 피지컬 덕에 모델 활동도 겸했던 적이 있다. 모델 출신다운 긴 팔다리로 시원시원하고 눈에 띄는 춤선을 가지고 있다. 이러한 피지컬은 오히려 잘못 추면 동작이 지저분해보인다는 리스크를 가지고 있지만 형원의 경우, 절제력이 뛰어나 오버해서 추는 것이 없어 오히려 깔끔하게 춘다는 평을 받는다. 이러한 장점 덕에 무대에서 센터를 서는 경우가 잦으며 포인트 안무를 혼자 소화하는 경우도 많다.",
    "coenffl", null, [{ title: "아이돌 라디오", id: "idioRadio", imgSrc: "idolRadio.jpeg" }])
const Joohoney = new Member("joohoney", "Joohoney", "이주헌", "메인래퍼", "1994-10-6",
    "랩, 춤, 노래, 센스, 카리스마, 사교성, 애교를 모두 갖춘 올라운드 플레이어. 몬스타엑스에서 제일 실물 갑이다 사람의 피부가 도자기보다 매끄러울 수 있나 싶을 정도로 피부가 좋고 모공이 없다. 발성으로 유리컵을 깬적이 있다. 유일한 단점은 한계가 없다는 것이다. MBTI는 ENFJ이다. 주헌의 반전 매력으로 꼽히는 부분은 그가 타고난 '사랑둥이'라는 점이다. 그는 늘 멤버를 비롯한 주변 사람, 그리고 몬베베에게 늘 사랑을 담아 따뜻한 말을 건네는 사람이며, 말이나 행동은 물론 무대와 자신이 만든 노래로도 사랑을 표현하는 것을 좋아한다. 주헌의 이러한 모습은 그의 팬들이 주헌을 사랑하는 큰 이유 중 하나이다.",
    "joohoneywalker", null, [{ title: "아이돌 라디오", id: "idioRadio", imgSrc: "idolRadio.jpeg" }])
const IM = new Member("im", "IM", "임창균", "리드래퍼", "1996-01-26",
    "몬스타엑스의 막내. 로우톤의 래핑으로 몬스타엑스의 무대에 안정감을 실어주는 역할을 한다 I AM WHAT I.M이라는, 귀에 쏙 박히는 시그니처 사운드를 반복적으로 사용해 자신의 색깔을 과감하고도 강렬하게 드러낸다. 몬스타엑스에서 가장 먼저 정식 개인 싱글 앨범을 발표한 멤버이다. 솔로 앨범에서는 몬스타엑스의 아이엠으로서 보여준 것보다도 훨씬 섹시한 분위기가 돋보이는데, 앨범의 전곡 작사와 작곡, 프로듀싱을 직접한 것은 물론 녹음까지도 자신의 작업실에서 진행하였을 정도로 처음부터 끝까지 자신의 손으로 만든 앨범이라고 언급한 바 있다.또한 정식으로 발표된 앨범 외에 믹스테이프도 다수 발표했다.",
    "imnameim", [{ title: "Duality", id: "duality", imgSrc: "duality.jpeg" }, { title: "Loop", id: "loop", imgSrc: "loop.jpeg" }], [{ title: "심야아이돌", id: "midnightIdol", imgSrc: "midnightIdol.jpeg" }])

const Members = [
    Shownu,
    Minhyuk,
    Kihyun,
    Hyungwon,
    Joohoney,
    IM
]

export default Members;