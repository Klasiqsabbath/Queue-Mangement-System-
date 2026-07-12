from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib import colors

path = "docs/prescripto-architecture-erd.pdf"
cnv = canvas.Canvas(path, pagesize=letter)
width, height = letter

cnv.setFont("Helvetica-Bold", 18)
cnv.drawString(1 * inch, height - 1 * inch, "Prescripto Application Architecture & ERD")
cnv.setFont("Helvetica", 10)
cnv.drawString(1 * inch, height - 1.3 * inch, "Generated from workspace code analysis")

text = cnv.beginText(1 * inch, height - 1.8 * inch)
text.setFont("Helvetica-Bold", 12)
text.textLine("1. Overview")
text.setFont("Helvetica", 10)
text.textLine("Prescripto is a telehealth booking platform with separate website, admin, and backend.")
text.textLine("It supports user registration/login, doctor listings, appointment booking, profile updates,")
text.textLine("and admin management of doctors and appointments.")
text.textLine("")
text.setFont("Helvetica-Bold", 12)
text.textLine("2. Backend Architecture")
text.setFont("Helvetica", 10)
text.textLine("• Express API with /api/user, /api/admin, /api/doctor routes")
text.textLine("• MongoDB via Mongoose models, with in-memory fallback when DB is unavailable")
text.textLine("• JWT auth for users and admins; bcrypt password hashing")
text.textLine("")
text.setFont("Helvetica-Bold", 12)
text.textLine("3. Frontend Architecture")
text.setFont("Helvetica", 10)
text.textLine("• clientside/ for public website; admin/ for admin portal")
text.textLine("• React + Vite + Tailwind CSS + Axios + React Router")
text.textLine("• Context providers manage shared app state, auth, bookings, and admin actions")
text.textLine("")
text.setFont("Helvetica-Bold", 12)
text.textLine("4. Database Models")
text.setFont("Helvetica", 10)
text.textLine("User: {_id, name, email, password, image, address, gender, dob, phone}")
text.textLine("Doctor: {_id, name, email, password, image, speciality, degree, experience, about, available, fees, address, date, slots_booked}")
text.textLine("Appointment: {userId, docId, slotDate, slotTime, userData, docData, amount, date, cancelled, payment, isCompleted}")
text.textLine("")
text.setFont("Helvetica-Bold", 12)
text.textLine("5. ERD Relationships")
text.setFont("Helvetica", 10)
text.textLine("• User 1 - * Appointment")
text.textLine("• Doctor 1 - * Appointment")
text.textLine("• Appointment stores embedded userData and docData for booking snapshot details")
text.textLine("")
text.setFont("Helvetica-Bold", 12)
text.textLine("6. Deployment & Environment")
text.setFont("Helvetica", 10)
text.textLine("• Backend uses MONGODB_URI or default prescripto database")
text.textLine("• Admin credentials are loaded from ENV variables")
text.textLine("• Fallback in-memory storage supports demo mode when MongoDB is unavailable")
cnv.drawText(text)

box_width = 2.2 * inch
box_height = 1.1 * inch
x1, y1 = 1 * inch, height - 5.6 * inch
x2, y2 = 4.5 * inch, height - 5.6 * inch
x3, y3 = 8 * inch, height - 5.6 * inch

cnv.setStrokeColor(colors.darkblue)
cnv.setFillColor(colors.lightgrey)
boxes = [
    (x1, y1, "User", ["_id", "name", "email", "password", "phone"]),
    (x2, y2, "Doctor", ["_id", "name", "speciality", "fees", "slots_booked"]),
    (x3, y3, "Appointment", ["userId", "docId", "slotDate", "slotTime", "cancelled"]),
]
for x, y, title, fields in boxes:
    cnv.rect(x, y, box_width, box_height, fill=1, stroke=1)
    cnv.setFillColor(colors.black)
    cnv.setFont("Helvetica-Bold", 10)
    cnv.drawString(x + 0.1 * inch, y + box_height - 0.25 * inch, title)
    cnv.setFont("Helvetica", 9)
    for i, field in enumerate(fields):
        cnv.drawString(x + 0.1 * inch, y + box_height - 0.45 * inch - i * 0.16 * inch, field)
    cnv.setFillColor(colors.lightgrey)

cnv.setStrokeColor(colors.black)
cnv.setLineWidth(1)
cnv.line(x1 + box_width, y1 + box_height / 2, x2, y2 + box_height / 2)
cnv.line(x2 + box_width, y2 + box_height / 2, x3, y3 + box_height / 2)
cnv.setFillColor(colors.black)
cnv.setFont("Helvetica", 9)
cnv.drawString((x1 + box_width + x2) / 2 - 0.25 * inch, y1 + box_height / 2 + 0.1 * inch, "1..*")
cnv.drawString((x2 + box_width + x3) / 2 - 0.25 * inch, y2 + box_height / 2 + 0.1 * inch, "1..*")

cnv.showPage()
cnv.save()
print(f"PDF generated: {path}")
