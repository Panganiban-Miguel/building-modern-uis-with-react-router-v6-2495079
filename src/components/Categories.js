import { Outlet, NavLink } from "react-router-dom";
import { getCategories, GetCategories } from "../api";

export default function Categories() {
  const categories = getCategories();
  return (
    <div className="container">
      <h1>Session Categories</h1>

      <ul className="categories">
        {categories.map(cat => (
          <li key={cat.id}>
            <NavLink
            to={cat.id}
            className={({ isActive }) =>
              isActive ? "category-active" : null}
            >
              {cat.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />

    </div>
  );
}
