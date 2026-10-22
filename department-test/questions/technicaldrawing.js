// Technical Drawing questions.
// Edit, delete or add lines freely. Format:  Q("question", ["A","B","C","D"], indexOfCorrect)
// indexOfCorrect is 0 for the first option, 1 for the second, 2 for the third, 3 for the fourth.
// Keep 50 questions here; each student gets a random 20 of them.
addSubject("technicaldrawing", "Technical Drawing", [
  Q("Which of these is the hardest pencil grade?", ["HB", "2B", "4H", "6B"], 2),
  Q("Which instrument is used to draw circles?", ["Set square", "Compasses", "Protractor", "French curve"], 1),
  Q("A scale of 1:2 means the drawing is:", ["Twice the actual size", "The same as actual size", "Half the actual size", "Ten times the actual size"], 2),
  Q("Which line type shows hidden details?", ["Thick continuous", "Thin continuous", "Chain line", "Short dashed line"], 3),
  Q("In orthographic projection, the view seen from the front is the:", ["Plan", "Elevation", "End view", "Section"], 1),
  Q("What are the dimensions of an A4 sheet?", ["210 × 297 mm", "297 × 420 mm", "148 × 210 mm", "420 × 594 mm"], 0),
  Q("Which pencil grade is generally softer?", ["2H", "H", "HB", "2B"], 3),
  Q("Which pencil grade is generally harder?", ["6B", "4B", "HB", "4H"], 3),
  Q("A T-square is mainly used to draw:", ["Horizontal parallel lines", "Circles", "Angles only", "Freehand curves"], 0),
  Q("A set square is commonly used to draw:", ["Vertical and standard angled lines", "Circles", "Irregular curves", "Textures"], 0),
  Q("A protractor is used to measure:", ["Angles", "Lengths", "Areas", "Mass"], 0),
  Q("A scale of 1:1 represents a drawing that is:", ["Full size", "Half size", "Twice full size", "One tenth size"], 0),
  Q("A scale of 2:1 represents a drawing that is:", ["Twice the actual size", "Half the actual size", "Full size", "One quarter the actual size"], 0),
  Q("A scale of 1:5 represents a drawing that is:", ["One fifth of the actual size", "Five times the actual size", "Full size", "Ten times the actual size"], 0),
  Q("A thick continuous line is commonly used for:", ["Visible outlines and edges", "Hidden edges", "Centre lines", "Dimension lines"], 0),
  Q("A thin continuous line with arrowheads is commonly used for:", ["Dimension lines", "Visible outlines", "Hidden edges", "Centre lines"], 0),
  Q("A chain line is commonly used to show:", ["Centres and axes of symmetry", "Visible outlines", "Hidden details", "Cutting surfaces only"], 0),
  Q("A cutting plane is commonly indicated by a:", ["Chain line with thickened ends and arrows", "Thin continuous dimension line", "Short dashed line only", "Freehand wavy line"], 0),
  Q("A section view is used to show:", ["Internal details exposed by an imaginary cut", "Only the object's colour", "The object's weight", "A list of materials"], 0),
  Q("Section lining is generally drawn with:", ["Thin, evenly spaced inclined lines", "Thick circles", "Wavy lines only", "Large arrowheads"], 0),
  Q("In an orthographic drawing, the plan is the view from:", ["Above", "Below", "The front", "The right side"], 0),
  Q("In an orthographic drawing, the end view shows the object from:", ["One side", "Above", "The front only", "Behind the drawing sheet"], 0),
  Q("In first-angle orthographic projection, the top view is placed:", ["Below the front view", "Above the front view", "To the right of the right-side view", "Inside the front view"], 0),
  Q("In third-angle orthographic projection, the top view is placed:", ["Above the front view", "Below the front view", "To the left of the left-side view", "Inside the front view"], 0),
  Q("In isometric projection, the three principal axes are separated by:", ["120°", "90°", "60°", "45°"], 0),
  Q("In an isometric drawing, the receding axes are usually drawn at:", ["30° to the horizontal", "15° to the horizontal", "45° to the horizontal", "60° to the vertical"], 0),
  Q("A circle drawn on an isometric plane appears as an:", ["Ellipse", "Rectangle", "Parabola", "Hexagon"], 0),
  Q("A centre line should usually extend:", ["Slightly beyond the feature it describes", "Exactly to the centre point only", "Across the entire page", "Only through hidden edges"], 0),
  Q("Dimension figures should normally be placed:", ["Above and clear of the dimension line", "Inside arrowheads", "On a hidden line", "Only in the title block"], 0),
  Q("Extension lines are used to:", ["Indicate the points between which a dimension applies", "Show hidden edges", "Represent the centre of a circle", "Shade a section"], 0),
  Q("A leader line connects a note to:", ["A specific feature of a drawing", "The sheet border only", "The drawing scale", "The projection symbol"], 0),
  Q("A dimension should generally be stated:", ["Once and clearly", "Repeated in every view", "Only as a written paragraph", "Without units or figures"], 0),
  Q("The title block usually contains the drawing title and:", ["Scale and identification details", "Only the material's colour", "The examiner's answers", "A list of hidden lines"], 0),
  Q("The border of a technical drawing sheet is usually drawn with a:", ["Continuous line", "Freehand curve", "Zigzag line", "Chain line"], 0),
  Q("Which standard paper size is larger than A4?", ["A3", "A5", "A6", "A7"], 0),
  Q("An A3 sheet measures:", ["297 × 420 mm", "210 × 297 mm", "148 × 210 mm", "420 × 594 mm"], 0),
  Q("The ratio of the longer side to the shorter side in the ISO A-series paper sizes is approximately:", ["√2:1", "2:1", "3:2", "1:1"], 0),
  Q("A French curve is used to draw:", ["Smooth irregular curves", "Parallel horizontal lines", "Circles of a fixed radius", "Right angles"], 0),
  Q("A divider is used to:", ["Transfer or step off distances", "Draw a straight horizontal line", "Measure an angle", "Erase pencil marks"], 0),
  Q("A compass is set to draw a circle using its:", ["Radius", "Diameter only", "Circumference", "Area"], 0),
  Q("The diameter of a circle is:", ["Twice its radius", "Half its radius", "Equal to its circumference", "The distance around it"], 0),
  Q("A regular hexagon has how many equal sides?", ["Five", "Six", "Seven", "Eight"], 1),
  Q("A regular pentagon has how many sides?", ["Four", "Five", "Six", "Seven"], 1),
  Q("A triangle with three equal sides is:", ["Equilateral", "Isosceles", "Scalene", "Right-angled"], 0),
  Q("A triangle with one angle equal to 90° is:", ["Right-angled", "Equilateral", "Obtuse", "Acute"], 0),
  Q("A tangent to a circle meets the circle at:", ["One point", "Two points", "No points", "The centre only"], 0),
  Q("A line perpendicular to another line meets it at:", ["90°", "45°", "60°", "180°"], 0),
  Q("The locus of points at a constant distance from a fixed point is a:", ["Circle", "Straight line", "Triangle", "Parabola"], 0),
  Q("The fixed point from which points on a circle are equally distant is its:", ["Centre", "Focus", "Vertex", "Tangent"], 0),
  Q("A gear is used to transmit:", ["Rotary motion and force", "Electrical charge only", "Heat through a wall", "Sound in a vacuum"], 0),
  Q("Which view in the diagram is the plan view?", ["A", "B", "C", "D"], 1, `<svg xmlns="http://www.w3.org/2000/svg" width="340" height="190" viewBox="0 0 340 190" role="img" aria-label="Three orthographic views of a stepped block, labelled A front, B top, and C side">
    <g fill="#fff" stroke="#14213d" stroke-width="2">
      <path d="M35 85H95V55H135V115H35Z"/>
      <path d="M35 130H95V115H135V160H35Z"/>
      <path d="M175 55H245V115H175Z"/>
    </g>
    <path d="M95 55V115M175 85H245M95 130V160" stroke="#14213d" stroke-width="2"/>
    <text x="84" y="125" text-anchor="middle" font-size="15" fill="#14213d">A</text>
    <text x="84" y="178" text-anchor="middle" font-size="15" fill="#14213d">B</text>
    <text x="255" y="88" text-anchor="middle" font-size="15" fill="#14213d">C</text>
  </svg>`),
  Q("In the isometric sketch, which edge is vertical?", ["Edge AB", "Edge BC", "Edge CD", "Edge DA"], 0, `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="200" viewBox="0 0 280 200" role="img" aria-label="Isometric cube with vertices A, B, C, D labelled around its front-left vertical edge">
    <path d="M75 75L145 35L215 75L145 115ZM75 75V155L145 195V115M215 75V155L145 195" fill="#eaf3ff" stroke="#14213d" stroke-width="2"/>
    <path d="M75 75L145 115L215 75M145 115V195" fill="none" stroke="#14213d" stroke-width="2"/>
    <text x="60" y="74" font-size="16" fill="#14213d">A</text>
    <text x="60" y="160" font-size="16" fill="#14213d">B</text>
    <text x="150" y="119" font-size="16" fill="#14213d">C</text>
    <text x="150" y="193" font-size="16" fill="#14213d">D</text>
  </svg>`)
]);
