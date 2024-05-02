import './ButtonStyles.css';
const Button = () => {
  return (
    <div className="parrent">
      <button className="my-button rounded-button">Thêm</button>
      <button className="my-button rounded-button">Xóa</button>
      <button className="my-button rounded-button">Sửa</button>
      <button className="my-button rounded-button">Lọc</button>
    </div>
  );
};

export default Button;
