"""Rebuild the public, one-page resume. Run with Python and ReportLab."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
for name, filename in [('Times-Roman','Times New Roman.ttf'),('Times-Bold','Times New Roman Bold.ttf'),('Times-Italic','Times New Roman Italic.ttf'),('Times-BoldItalic','Times New Roman Bold Italic.ttf')]:
 pdfmetrics.registerFont(TTFont(name, '/System/Library/Fonts/Supplemental/'+filename))
pdfmetrics.registerFontFamily('Times-Roman',normal='Times-Roman',bold='Times-Bold',italic='Times-Italic',boldItalic='Times-BoldItalic')

ROOT = Path(__file__).resolve().parents[1]
styles = {
 'body': ParagraphStyle('body', fontName='Times-Roman', fontSize=10.1, leading=12.5),
 'title': ParagraphStyle('title', fontName='Times-Bold', fontSize=20, leading=24, alignment=1),
 'contact': ParagraphStyle('contact', fontName='Times-Roman', fontSize=9.7, leading=13, alignment=1),
 'section': ParagraphStyle('section', fontName='Times-Roman', fontSize=11.5, leading=14),
 'bullet': ParagraphStyle('bullet', fontName='Times-Roman', fontSize=10.1, leading=12.5, leftIndent=22, firstLineIndent=0, bulletIndent=9, bulletFontName='Times-Roman', bulletFontSize=10.1, spaceAfter=3),
}
flow = []
def p(text, style='body'):
 return Paragraph(text, styles[style])
def link(url, label):
 return f'<link href="{url}" color="black">{label}</link>'
def section(title):
 flow.extend([Spacer(1,5),p(title,'section'),HRFlowable(width='100%',thickness=.5,color=colors.black),Spacer(1,6)])
def row(left,right):
 table=Table([[p(left),p(right) if right else ""]],colWidths=[410,106] if right else [516,0])
 table.setStyle(TableStyle([('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),0),('VALIGN',(0,0),(-1,-1),'TOP')]))
 if right: table._cellvalues[0][1].style=ParagraphStyle('right',parent=styles['body'],alignment=2)
 flow.append(table)
def bullets(items):
 for text in items: flow.append(Paragraph(text, styles['bullet'], bulletText='\u2022'))

flow.extend([p('Bakr Matlab','title'),Spacer(1,3),p('Ottawa, ON | '+link('mailto:matlab893@gmail.com','matlab893@gmail.com')+' | '+link('https://bakrmatlab.com','bakrmatlab.com'),'contact'),p(link('https://github.com/bakrmatlab','github.com/bakrmatlab')+' | '+link('https://www.linkedin.com/in/bakr-matlab','linkedin.com/in/bakr-matlab'),'contact')])
section('EDUCATION')
row('<b>Carleton University</b>','Expected Apr. 2029')
row('<i>Bachelor of Computer Science, Cybersecurity stream</i>','<i>Ottawa, ON</i>')
row('Core GPA: 11.0/12.0','')
flow.append(Spacer(1,5))
row('<b>Algonquin College</b>','Apr. 2023')
row('<i>Computer Programming Diploma</i>','<i>Ottawa, ON</i>')
row('Relevant coursework: Object-oriented programming, data structures, relational databases,<br/>SQL, full-stack web development, team projects','')
section('EXPERIENCE')
row('<b>Software Developer</b>','Apr. 2026 - Jul. 2026')
row('<i>Promote Media, Inc. (Promote.fun)</i>','<i>Remote</i>')
flow.append(Spacer(1,3))
bullets([
'Helped build a creator clipping platform from scratch and launch it in roughly one month; it later grew to approximately 100,000 users.',
'Built application features and infrastructure with React, TypeScript, Convex, Clerk, Cloudflare R2, and Resend.',
'Worked with engineers to break down features and coordinate delivery through Jira.',
'Built creator payout functionality to support USDC withdrawals.',
'Used Sentry and PostHog to investigate production errors and user activity.'
])
section('PROJECTS')
# Newest first; repository creation dates distinguish the two 2026 projects.
projects=[
('OTPGuard','Chrome Extension &amp; Companion Website','2026','https://github.com/bakrmatlab/OTPGuard','https://otpguard.net/',[
'Built a Chrome extension that finds recent Gmail verification codes and fills them only after the user chooses Fill.',
'Developed the extension and companion website with TypeScript, React, Next.js, and Convex, including guided setup and website permissions.',
'Kept Gmail tokens, messages, and codes inside the extension, with local preferences and activity controls.'
]),
('MoneyPal','Personal Finance Web App','2026','https://github.com/bakrmatlab/MoneyPal','https://money-pal-wheat.vercel.app/',[
'Built a personal finance app with simulated transfers between users, validating recipients and wallet balances before processing each transfer.',
'Kept transaction history and budget totals in sync when transfers were deleted.',
'Developed monthly budgets, scheduled rollovers, overspend alerts, and spending history using Convex.'
]),
('Pet Connect','Mobile Social App','2023','https://github.com/FinalScript/pet-connect',None,[
'Built a React Native social app where pet owners could create profiles and share photos and posts.',
'Developed a timeline feed with likes, comments, and pet search using Apollo GraphQL, Express, and MySQL.',
'Integrated Auth0 and JWT to support account registration and login.'
])]
for index,(name,kind,date,repo,live,items) in enumerate(projects):
 if index: flow.append(Spacer(1,5))
 heading=f'<b>{name} | {kind}</b> | '+link(repo,'GitHub')
 if live: heading+=' | '+link(live,'Live App')
 row(heading,date);flow.append(Spacer(1,3));bullets(items)
section('TECHNICAL SKILLS')
for label,value in [
('Programming Languages','TypeScript, JavaScript, Java, Python, SQL'),
('Frameworks','React, Next.js, React Native, Spring Boot, Express'),
('Backend Development','Node.js, REST APIs, GraphQL, Convex, Clerk'),
('Browser Extensions','Chrome Manifest V3, Gmail API'),
('Databases','PostgreSQL, MySQL, Oracle, SQLite, Supabase'),
('DevOps &amp; Tools','Git, Docker, GitHub Actions, Linux, Cloudflare, Vercel, Jira, Postman')]:
 table=Table([[p(f'<b>{label} |</b>'),p(value)]],colWidths=[145,371])
 table.setStyle(TableStyle([('LEFTPADDING',(0,0),(-1,-1),7),('RIGHTPADDING',(0,0),(-1,-1),0),('TOPPADDING',(0,0),(-1,-1),0),('BOTTOMPADDING',(0,0),(-1,-1),2)]))
 flow.append(table)
SimpleDocTemplate(str(ROOT/'public/Bakr_Matlab_Resume.pdf'),pagesize=(612,792),leftMargin=48,rightMargin=48,topMargin=20,bottomMargin=30,title='Bakr Matlab Resume',author='Bakr Matlab').build(flow)
