import UserFavs from "./Components/UserFavs";

function UserPage() {
  return (
    <div className="UserPage">
      <nav></nav>
      <div>
        <div>
          <h1>Hello User!</h1>
          <label htmlFor="Location">What is your fav location?</label>
          <input type="text" placeholder="write your fav location" />
          <label htmlFor="MenuItem">What is your fav food/drink?</label>
          <input type="text" placeholder="write your fav food/drink" />
        </div>
        <UserFavs />
      </div>
    </div>
  );
}
