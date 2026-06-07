function CalendarBox() {
  return (
    <div className="calendar-box">
        <div className="calendar-header">
            <button type="button">{"<"}</button>
            <span>Sep 2025</span>
            <button type="button">{">"}</button>
        </div>

        <div className="calendar-grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <strong key={day}>{day}</strong>
            ))}

        {Array.from({ length: 30 }, (_, index) => (
            <button type="button" key={index}>
                {index + 1}
            </button>
        ))}

        </div>
    </div>
  );
}

export default CalendarBox;
