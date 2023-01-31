import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddPlayList = () => {
  const handleAddPlaylist = () => {
    toast.error("Xin lỗi chức năng chưa cập nhật!");
  };
  return (
    <div className="add-playlist-sidebar">
      <button className="zm-btn" onClick={handleAddPlaylist}>
        <i className="icon bx bx-plus"></i>
        <span>Tạo Playlist mới</span>
      </button>
    </div>
  );
};

export default AddPlayList;
