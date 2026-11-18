import { Link } from "react-router-dom";
import hamMenu from "../../../public/icons/ham-menu.svg";
import arrowDown from "../../../public/icons/arrow-down.svg";
import home from "../../../public/icons/home.svg";
import logout from "../../../public/icons/logout.svg";
import config from "../../../public/icons/config.svg";
import spanishFlag from "../../../public/icons/spanish-flag.svg";

function handleLogout() {}

function Menu() {
  return (
    <>
      <details className="w-full">
        <summary className="p-4">
          <img src={hamMenu} alt="" className="h-8" />
        </summary>

        <ul
          className="absolute backdrop-blur-md bg-overlay-b-sm text-secondary list-none w-full h-dvh text-xl 
        flex flex-col gap-6 p-6"
        >
          <li>
            <Link to="/daily-learning">Continue</Link>
          </li>
          <li>
            <Link to="/mailbox">Mailbox</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>

          <br />

          <details>
            <summary className="flex gap-4 items-center">
              Progress
              <img src={arrowDown} alt="" className="h-4" />{" "}
            </summary>
            <ul className="space-y-4 mt-6">
              <li>
                <Link to="/real-life-situations">Real-Life Situations</Link>
              </li>
              <li>
                <Link to="/words">Active Words</Link>
              </li>
              <li>
                <Link to="/grammar">Grammar</Link>
              </li>
            </ul>
          </details>
          <li>
            <Link to="/free-review">Review</Link>
          </li>

          <li>
            <Link to="/plans">Plans</Link>
          </li>
 <li>
            <Link to="/tests">Tests</Link>
          </li>
          <section className="flex justify-between gap-4">
            <ul className="flex gap-4">
              <li>
                <Link to="/home">
                  {" "}
                  <img src={home} alt="" className="h-6" />
                </Link>
              </li>
              <li>
                <Link to="/config">
                  <img src={config} alt="" className="h-6" />
                </Link>
              </li>
              <li>
                <Link to="/available-languages">
                  <img src={spanishFlag} alt="" className="h-6" />
                </Link>
              </li>
              <li>
                <Link to="/user/">
                  <img src={spanishFlag} alt="" className="h-6" />
                </Link>
              </li>
                     
            </ul>
            <img
              onClick={() => handleLogout()}
              src={logout}
              alt=""
              className="h-6"
            />
          </section>
        </ul>
      </details>
    </>
  );
}

export default Menu;
