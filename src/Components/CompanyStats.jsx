import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const CompanyStats = () => {
  const totalStudentsPlaced = 100;
  const placementsByBranch = {
    "Computer Science": 40,
    Electrical: 20,
    Mechanical: 15,
    Civil: 10,
    Other: 15, // Placeholder for any other branches
  };
  const percentagePlacedByBranch = {};
  for (const branch in placementsByBranch) {
    percentagePlacedByBranch[branch] =
      (placementsByBranch[branch] / totalStudentsPlaced) * 100;
  }
  const averageSalary = 75000;
  const highestSalary = 100000;
  const location = "Various locations";
  const positionsOffered = ["Software Developer", "Data Analyst"];

  useEffect(() => {
    // Sample data
    const branchData = {
      labels: ["Computer Science", "Electrical", "Mechanical", "Civil"],
      datasets: [
        {
          label: "Placement by Branch",
          data: [30, 15, 10, 5],
          backgroundColor: ["#4F46E5", "#22C55E", "#F59E0B", "#F87171"],
        },
      ],
    };

    const salaryData = {
      labels: ["< $50k", "$50k - $70k", "$70k - $90k", "> $90k"],
      datasets: [
        {
          label: "Salary Distribution",
          data: [10, 25, 45, 20],
          backgroundColor: ["#4F46E5", "#22C55E", "#F59E0B", "#F87171"],
        },
      ],
    };

    // Chart configurations
    const branchConfig = {
      type: "pie",
      data: branchData,
    };

    const salaryConfig = {
      type: "pie",
      data: salaryData,
    };

    // Render charts
    const branchChart = new Chart(
      document.getElementById("branchChart"),
      branchConfig
    );
    const salaryChart = new Chart(
      document.getElementById("salaryChart"),
      salaryConfig
    );

    // Cleanup function
    return () => {
      branchChart.destroy();
      salaryChart.destroy();
    };
  }, []);

  return (
    <div>
      <header className="bg-blue-600 text-white py-4 text-center">
        <h1 className="text-2xl font-bold">Amazon Placement Statistics</h1>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Total Students Placed: {totalStudentsPlaced}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Placements by Engineering Branch:
            </h2>
            <ul className="list-disc pl-5">
              {Object.entries(placementsByBranch).map(([branch, count]) => (
                <li key={branch}>
                  {branch}: {count}
                </li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold mb-4">
              Percentage of Students Placed from Each Branch:
            </h2>
            <ul className="list-disc pl-5">
              {Object.entries(percentagePlacedByBranch).map(
                ([branch, percentage]) => (
                  <li key={branch}>
                    {branch}: {percentage.toFixed(2)}%
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Average Salary Offered: ${averageSalary.toLocaleString()}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Highest Salary Offered: ${highestSalary.toLocaleString()}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Location of Placements: {location}
            </h2>
            <h2 className="text-xl font-semibold mb-4">
              Type of Positions Offered:
            </h2>
            <ul className="list-disc pl-5">
              {positionsOffered.map((position) => (
                <li key={position}>{position}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <main className="container mb-auto mr-auto ml-auto mt-4 py-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Branch-wise Placements
            </h2>
            <canvas id="branchChart" width="400" height="300"></canvas>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Salary Distribution</h2>
            <canvas id="salaryChart" width="400" height="300"></canvas>
          </div>
        </div>
      </main>
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-red-300 text-7xl font-bold opacity-30">
          Amazon India
        </p>
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2024 BITS PILANI HYDERABAD CAMPUS</p>
      </footer>
    </div>
  );
};

export default CompanyStats;
