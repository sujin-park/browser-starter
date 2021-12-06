// 템플릿 리터럴
const input = `#####
#OoP#
#####`;

// 2차원 배열
function getStage(stageArr) {
  let arr = [];
  const rows = stageArr.filter(str => str === '\n').length;
  const cols = stageArr.indexOf('\n') - 1;
  const hall = 'O';
  const ball = 'o';
  const player = 'P';

  // for 문이 n 을 만났을 때, rows 증가 / cols 초기화
  for (let i = 0; i < stageArr.length; i++) {
    let rows = 0;
    let cols = 0;

    const isNextRow = stageArr[i] === '\n';
  }
  // console.log(`가로크기 : ${cols + 1}`);
  // console.log(`세로크기 : ${rows + 1}`);
  // console.log('구멍의 수 : ');
  // console.log('공의 수 : ');
  // console.log('플레이어 위치 : ');
}

function printResult() {
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      console.log(i, j);
    }
  }
}

// 메인 함수 선언부
function getDataByMap(map) {
  const stage1Map = getStage(map.split(''));
}

// 메인 함수 실행부
getDataByMap(input);
