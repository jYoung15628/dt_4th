function writeNote() {
    // 입력 필드 가져오기
    const writer = document.getElementById('writer');
    const content = document.getElementById('content');
    const table = document.getElementById('table');

    // 작성자와 내용이 비어있으면 경고창 띄우기
    if (writer.value.trim() === '' || content.value.trim() === '') {
        alert('작성자와 내용을 모두 입력해 주세요.');
        return;
    }

    // 현재 시간 가져오기
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // 0부터 시작하므로 +1
    const date = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const formattedDate = `${year}-${month}-${date} ${hour}:${minute}`;

    // 새로운 행 생성
    const newRow = document.createElement('tr');

    const writerCell = document.createElement('td');
    writerCell.textContent = writer.value;

    const contentCell = document.createElement('td');
    contentCell.textContent = content.value;

    const dateCell = document.createElement('td');
    dateCell.textContent = formattedDate;

    // 행에 데이터 추가
    // newRow.appendChild(writerCell);
    // newRow.appendChild(contentCell);
    // newRow.appendChild(dateCell);
    newRow.append(writerCell, contentCell, dateCell);

    // 테이블에 행 추가
    table.appendChild(newRow);

    // 입력 필드 초기화
    writer.value = '';
    content.value = '';
};
