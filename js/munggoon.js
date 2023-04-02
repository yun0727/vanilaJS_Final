const beagles = [
  {
    beagle: "내 이름은 멍군이에요",
  },
  {
    beagle: "나는 12살이에요",
  },
  {
    beagle: "나는 먹는걸 좋아해요",
  },
  {
    beagle: "나는 산책하는 걸 좋아해요",
  },
  {
    beagle: "나는 엄마 발 밑에서 자는걸 좋아해요",
  },
  {
    beagle: "나는 간절기만 되면 털갈이를 해요",
  },
  {
    beagle: "나는 씻는걸 안 좋아해요",
  },
  {
    beagle: "나는 달리기를 잘해요",
  },
];

const beagle = document.querySelector("#beagle span:first-child");

const aboutBeagle = beagles[Math.floor(Math.random() * beagles.length)];

beagle.innerText = aboutBeagle.beagle;
