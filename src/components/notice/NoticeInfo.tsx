type NoticeInfoProps = {
  pw?: string,
  isFindPw: boolean,
}

function NoticeInfo({
  pw= '',
  isFindPw= false,
}: NoticeInfoProps) {

  if (isFindPw) {
    return (
      <div>
        고객님의 임시 비밀번호가 발급되었습니다. <br />
        임시 비밀번호는 <span>{pw}</span> 입니다. <br />
        해당 비밀번호로 로그인해주세요.
      </div>
    );
  } else {
    return (
      <div>
        이름과 아이디를 입력하신 후 비밀번호 찾기를 눌러주세요.
      </div>
    );
  }
}



export default NoticeInfo;