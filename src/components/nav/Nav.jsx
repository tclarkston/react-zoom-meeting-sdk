import styles from './Nav.module.css';

function Nav({ onJoinSubmitted }) {

  function submitHandler(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    onJoinSubmitted(data);
  }

  return (
    <nav id={styles['nav-tool']} className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Join Zoom Session
          </a>
        </div>
        <div id="navbar" className={styles.websdktest}>
          <form
            className="navbar-form navbar-right"
            id="meeting_form"
            onSubmit={submitHandler}
          >
            <div className="form-group">
              <input
                type="text"
                name="display_name"
                id={styles['display_name']} 
                maxLength="100"
                placeholder="First Name Last Initial"
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                name="meeting_number"
                id="meeting_number"
                maxLength="200"
                style={{ width: 150 }}
                placeholder="Meeting Number"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="meeting_pwd"
                id="meeting_pwd"
                style={{ width: 150 }}
                maxLength="32"
                placeholder="Meeting Password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="meeting_email"
                id="meeting_email"
                style={{ width: 150 }}
                maxLength="32"
                placeholder="Email is Optional"
                className="form-control input-"
              />
            </div>
            <div className="form-group">
              <select id="meeting_role" className={styles['sdk-select']}>
                <option value="0">Attendee</option>
                <option value="1">Host</option>
              </select>
            </div>
            <div className="form-group">
              <select id="meeting_china" className={styles['sdk-select']}>
                <option value="0">Global</option>
                <option value="1">China</option>
              </select>
            </div>
            <div className="form-group">
              <select id="meeting_lang" className={styles['sdk-select']}>
                <option value="en-US">English</option>
              </select>
            </div>
            <input type="hidden" value="" id="copy_link_value" />
            <input type="hidden" value="@Model.ProjectId" id="project_id" />
            <button type="submit" className="btn btn-primary" id="join_meeting">
              Join
            </button>
            <button type="submit" className="btn btn-primary" id="clear_all">
              Clear
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
