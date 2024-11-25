const elever = [
    { namn: "Bat von Man", utbildning: "Frontend", stad: "Malmö", år: 1 },
    { namn: "Cat von Woman", utbildning: "Backend", stad: "Stockholm", år: 2 },
    { namn: "Spider McWeb", utbildning: "Frontend", stad: "Göteborg", år: 3 },
    { namn: "Iron Dev", utbildning: "Frontend", stad: "Malmö", år: 1 },
    { namn: "Hulk Code", utbildning: "Fullstack", stad: "Lund", år: 2 }, 
    { namn: "Thor Script", utbildning: "Frontend", stad: "Uppsala", år: 1 },
    { namn: "Captain Byte", utbildning: "Backend", stad: "Malmö", år: 3 },
    { namn: "Black Code", utbildning: "Frontend", stad: "Helsingborg", år: 1 },
    { namn: "Scarlet Compiler", utbildning: "Fullstack", stad: "Stockholm", år: 2 },
    { namn: "Vision Array", utbildning: "Frontend", stad: "Malmö", år: 1 }
    ]

    console.table(elever);

    const filterStudents = () => {
        let isTeacherBox = document.querySelector("#isTeacher");
        if(isTeacherBox.checked){

        //Hämtar värden från inputs
        document.querySelector("ul").innerHTML = "";


        let education = document.querySelector("[name=utbildning]:checked").value
        let city = document.querySelector("[name=stad]:checked").value;
        let grade = document.querySelector("select").value;


        console.log(grade);
        //Filtrera originaldata

        console.log(city);
        //Skapa en array-kopia med spread operator
        let filteredArr = [...elever];
        
        if(education !== "Alla") {
            filteredArr = filteredArr.filter((elev) => {
                return elev.utbildning === education
            })
        }

        if(city !== "Alla"){
            filteredArr = filteredArr.filter(elev => elev.stad === city)
        }

        if(grade !== "Alla"){
            filteredArr = filteredArr.filter(elev => elev.år === Number(grade))
        }

        //Visa ut data i DOM

        if(filteredArr.length === 0){
            let li = document.createElement("li");
            li.textContent = "No student matched criterias"
            document.querySelector("ul").append(li);
        }
        filteredArr.forEach((elev)=> {
            let li = document.createElement("li");
            li.textContent = elev.namn + " - " + elev.utbildning;
            document.querySelector("ul").append(li);
        })
        } else {
            alert("Please confirm that you're a teacher");
        }
    }

    document.querySelector("#filterBtn").addEventListener("click", filterStudents);