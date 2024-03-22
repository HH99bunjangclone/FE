import styled from 'styled-components';
import Header from '../../components/Header';

function ItemDetail() {
  return (
    <div>
      <Header />
      <span>홈</span>
      <br />
      <span>카테고리</span>
      <hr />
      <ItemBox>
        <Img src="/assets/exam1.png" alt="" />
        <ItemInfo>
          <div>
            <h2>제목</h2>
            <h4>
              100,000<span>원</span>
            </h4>
          </div>
          <hr />
          <ButtonContainer>
            <LikeButton>찜</LikeButton>
            <PayButton>바로구매</PayButton>
          </ButtonContainer>
        </ItemInfo>
      </ItemBox>
      <hr />
      <InfoBox>
        <span>상품정보</span>
        <hr />
        <p>내용</p>
      </InfoBox>
    </div>
  );
}

export default ItemDetail;

export const Img = styled.img`
  width: 428px;
  height: 428px;
`;

export const ItemBox = styled.div`
  height: 428px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ItemInfo = styled.div`
  margin-left: 20px;
  div {
    margin-bottom: 30px;
  }
  hr {
    background: #eeeeee;
    height: 1px;
    border: 0;
  }
  h2 {
    margin-top: 0;
    font-size: 24px;
  }
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 40px;
    span {
      margin-left: 5px;
      font-size: 28px;
    }
  }
  button {
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;
export const LikeButton = styled.button`
  width: 176px;
  height: 56px;
  border-radius: 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background-color: #cccccc;
`;
export const PayButton = styled(LikeButton)`
  background-color: #ffa425;
`;

export const InfoBox = styled.div`
  margin-top: 48px;
  padding-bottom: 120px;
  span {
    font-size: 18px;
    margin-bottom: 16px;
  }
  hr {
    background: #eeeeee;
    height: 1px;
    border: 0;
  }
  p {
    font-size: 14px;
    margin-top: 40px;
  }
`;
