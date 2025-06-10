import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";

const SidebarAdmin = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const [isManageOpen, setIsManageOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full h-full bg-gray-800 text-white p-4 overflow-y-auto">
      <div className="text-xl font-bold mb-6">Admin Panel</div>

      <div>
        <button
          onClick={() => setIsManageOpen(!isManageOpen)}
          className="w-full flex items-center justify-between text-left px-2 py-2 hover:bg-gray-700 rounded"
        >
          <span>Quản lý</span>
          {isManageOpen ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronRight size={18} />
          )}
        </button>

        {isManageOpen && (
          <div className="ml-4 mt-1 space-y-1">
            <Link
              to="/admin/quan-ly-lien-he"
              onClick={onLinkClick}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                isActive("/admin/quan-ly-lien-he")
                  ? "bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Quản lý liên hệ
            </Link>
            <Link
              to="/admin/quan-ly-tin-tuc"
              onClick={onLinkClick}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                isActive("/admin/quan-ly-tin-tuc")
                  ? "bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Quản lý bài viết
            </Link>
            <Link
              to="/admin/quan-ly-tin-tuc"
              onClick={onLinkClick}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                isActive("/admin/quan-ly-tin-tuc")
                  ? "bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Quản lý dịch vụ
            </Link>
            <Link
              to="/admin/quan-ly-tin-tuc"
              onClick={onLinkClick}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                isActive("/admin/quan-ly-tin-tuc")
                  ? "bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Quản lý giới thiệu công ty
            </Link>
            <Link
              to="/admin/quan-ly-tin-tuc"
              onClick={onLinkClick}
              className={`block px-2 py-1 rounded hover:bg-gray-700 ${
                isActive("/admin/quan-ly-tin-tuc")
                  ? "bg-gray-700 font-semibold"
                  : ""
              }`}
            >
              Quản lý banner / slideshow
            </Link>
          </div>
        )}
      </div>

      <div className="mt-4">
        <Link
          to="/admin/thong-ke"
          onClick={onLinkClick}
          className={`block px-2 py-2 rounded hover:bg-gray-700 ${
            isActive("/admin") ? "bg-gray-700 font-semibold" : ""
          }`}
        >
          Thống kê
        </Link>
      </div>
    </div>
  );
};

export default SidebarAdmin;
