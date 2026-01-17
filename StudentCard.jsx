 import jsPDF from "jspdf";

export default function StudentCard() {
  const download = () => {
    const pdf = new jsPDF();
    pdf.text("Student Card", 20, 20);
    pdf.text("Web Development Student", 20, 40);
    pdf.save("student-card.pdf");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h3>Student Card</h3>
        <p>Web Development</p>
        <button onClick={download}>Download PDF</button>
      </div>
    </div>
  );
}

 