// Run JavaScript after the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });


    // =========================
    // CHATBOT
    // =========================

    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbotBox = document.getElementById("chatbot-box");
    const chatbotClose = document.getElementById("chatbot-close");
    const chatbotSend = document.getElementById("chatbot-send");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotMessages = document.getElementById("chatbot-messages");


    // Check chatbot elements
    if (!chatbotToggle || !chatbotBox || !chatbotClose ||
        !chatbotSend || !chatbotInput || !chatbotMessages) {

        console.error("Chatbot elements are missing from index.html");

        return;
    }


    // Open chatbot
    chatbotToggle.addEventListener("click", function () {

        chatbotBox.style.display = "block";

    });


    // Close chatbot
    chatbotClose.addEventListener("click", function () {

        chatbotBox.style.display = "none";

    });


    // Send message
    function sendChatMessage() {

        const message = chatbotInput.value.trim();

        if (message === "") {
            return;
        }


        // User message
        const userMessage = document.createElement("div");

        userMessage.className = "user-message";

        userMessage.textContent = message;

        chatbotMessages.appendChild(userMessage);


        // Bot response
        const botMessage = document.createElement("div");

        botMessage.className = "bot-message";

        botMessage.textContent = getBotResponse(message);

        chatbotMessages.appendChild(botMessage);


        // Clear input
        chatbotInput.value = "";


        // Scroll to latest message
        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;

    }


    // Send button
    chatbotSend.addEventListener("click", sendChatMessage);


    // Enter key
    chatbotInput.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {

            sendChatMessage();

        }

    });


    // =========================
    // BOT RESPONSES
    // =========================

    function getBotResponse(message){

        const text = message.toLowerCase().trim();


        // Greetings
        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text.includes("good morning") ||
            text.includes("good evening")
        ) {
            return "Hi! 👋 I'm Subash's portfolio assistant. You can ask me about his skills, projects, education, experience, resume, or contact details.";
        }

        // Projects
        if (
            text.includes("project") ||
            text.includes("projects") ||
            text.includes("portfolio project") ||
            text.includes("work")
        ) {
            return "Subash has worked on HR Employee Attrition Analytics, Zomato Restaurant Analytics, and SecureCheck. You can explore these projects in the Projects section.";
        }


        // About Subash
        if (
            text.includes("who is subash") ||
            text.includes("about subash") ||
            text.includes("tell me about subash") ||
            text.includes("who are you") ||
            text.includes("tell me about yourself") ||
            text.includes("about you")
        ) {
            return "Subash Chandra Bose.K is an aspiring Data Analyst with skills in Python, SQL, PostgreSQL, Power BI, Pandas, and data visualization. He enjoys turning raw data into useful business insights.";
        }


        // Skills
        if (
            text.includes("skill") ||
            text.includes("skills") ||
            text.includes("technology") ||
            text.includes("technologies") ||
            text.includes("tools") ||
            text.includes("technical") ||
            text.includes("what do you know")
        ) {
            return "Subash's technical skills include Python, Pandas, NumPy, SQL, MySQL, PostgreSQL, Power BI, DAX, Matplotlib, Seaborn, Plotly, EDA, Statistics, ETL, and Data Analysis.";
        }


        // HR Project
        if (
            text.includes("hr") ||
            text.includes("attrition") ||
            text.includes("employee project")
        ) {
            return "HR Employee Attrition Analytics analyzes employee data to identify factors influencing attrition and high-risk employee segments using Python, Pandas, SQL, PostgreSQL, and Power BI.";
        }


        // Zomato Project
        if (
            text.includes("zomato") ||
            text.includes("restaurant project") ||
            text.includes("restaurant analytics")
        ) {
            return "Zomato Restaurant Analytics explores restaurant ratings, pricing, cuisines, locations, online delivery, and customer preferences across India.";
        }


        // SecureCheck
        if (
            text.includes("securecheck") ||
            text.includes("security check") ||
            text.includes("police")
        ) {
            return "SecureCheck is a Python-SQL digital ledger project designed to organize, manage, and analyze police-post security records.";
        }


        // Education
        if (
            text.includes("education") ||
            text.includes("degree") ||
            text.includes("college") ||
            text.includes("graduation") ||
            text.includes("study")
        ) {
            return "Subash completed B.E. in Electronics and Communication Engineering from University College of Engineering Villupuram in 2026.";
        }


        // Python
        if (
            text.includes("python") ||
            text.includes("pandas") ||
            text.includes("numpy")
        ) {
            return "Subash uses Python for data cleaning, analysis, Pandas, NumPy, visualization, and extracting insights from datasets.";
        }


        // SQL
        if (
            text.includes("sql") ||
            text.includes("postgresql") ||
            text.includes("mysql") ||
            text.includes("database")
        ) {
            return "Subash uses SQL, PostgreSQL, and MySQL for querying databases, analyzing data, and generating business insights.";
        }


        // Power BI
        if (
            text.includes("power bi") ||
            text.includes("powerbi") ||
            text.includes("dax") ||
            text.includes("dashboard")
        ) {
            return "Subash uses Power BI for data modeling, DAX, interactive dashboards, KPI reporting, and business insights.";
        }


        // Data Analytics
        if (
            text.includes("data analyst") ||
            text.includes("data analysis") ||
            text.includes("analytics") ||
            text.includes("analyst")
        ) {
            return "Subash is an aspiring Data Analyst focused on Python, SQL, Power BI, data visualization, EDA, and turning data into actionable insights.";
        }


        // Resume
        if (
            text.includes("resume") ||
            text.includes("cv") ||
            text.includes("curriculum")
        ) {
            return "You can view or download Subash's resume using the 'Download Resume' button in the Home section.";
        }


        // GitHub
        if (
            text.includes("github") ||
            text.includes("source code")
        ) {
            return "You can explore Subash's projects and source code through the GitHub links provided in the Projects section.";
        }


        // LinkedIn
        if (
            text.includes("linkedin") ||
            text.includes("professional profile")
        ) {
            return "You can connect with Subash through the LinkedIn link available in the Contact section.";
        }


        // Contact
        if (
            text.includes("contact") ||
            text.includes("email") ||
            text.includes("phone") ||
            text.includes("whatsapp") ||
            text.includes("reach")
        ) {
            return "You can contact Subash through Email, Phone, WhatsApp, GitHub, or LinkedIn. All contact details are available in the Contact section.";
        }


        // Hiring
        if (
            text.includes("hire") ||
            text.includes("hiring") ||
            text.includes("job") ||
            text.includes("opportunity") ||
            text.includes("available")
        ) {
            return "Subash is building his career as a Data Analyst and is interested in opportunities where he can apply Python, SQL, Power BI, and data analysis skills.";
        }


        // Thank you
        if (
            text.includes("thank") ||
            text.includes("thanks")
        ) {
            return "You're welcome! 😊 Feel free to ask me anything about Subash's portfolio.";
        }


        // Default
        return "I'm still learning! 😊 Try asking me about Subash's skills, projects, education, Python, SQL, Power BI, resume, GitHub, LinkedIn, or contact details.";
    }

    
});