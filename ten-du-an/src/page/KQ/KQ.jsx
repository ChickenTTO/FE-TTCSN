import React from "react";
import "./KQ.css";
import { useState } from "react";
function KQ() {
  const [stats] = useState({
    totalWeight: 128,
    edgeCount: 14,
    generations: 100,
  });

  return (
    <>
      <div className="app-container">
        {/* --- SIDEBAR --- */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="logo-container">
              <div
                className="logo-img"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOHyTRL2lw5LyqC_14bI5ITvpcJAocmWGJOli-aL0Lx-3O35OxjHsjk6tk89ekJUKBP3cwHnyFXXjpH4xBkmiFq0RIGyf09JEzTohTFIWtoT3zVyPLXZ1cQx9bE5b865JNZGfnKHVmgOhQkEfByaaEzCpvEks8srMjwMmm18tqo5c2M8oSCPp32UbAFDDi4GGTbARsPW85DbWDCAzCwEn5q2fRggthMAJk01KYUiFJ1MOH4nSdJJQyi52tn-BQfatMNOv-qZmBxQ")',
                }}
              ></div>
              <div className="logo-text">
                <h1>GA for MST</h1>
                <p>Project Dashboard</p>
              </div>
            </div>

            <nav className="nav-menu">
              <a href="#" className="nav-item active">
                <span className="material-symbols-outlined">dashboard</span>
                <p>Dashboard</p>
              </a>
              <a href="#" className="nav-item">
                <span className="material-symbols-outlined">play_circle</span>
                <p>Run Algorithm</p>
              </a>
              <a href="#" className="nav-item">
                <span className="material-symbols-outlined">history</span>
                <p>History</p>
              </a>
              <a href="#" className="nav-item">
                <span className="material-symbols-outlined">settings</span>
                <p>Settings</p>
              </a>
            </nav>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="main-content">
          <div className="content-wrapper">
            {/* Page Heading */}
            <div className="page-header">
              <div className="header-text">
                <h2>Kết quả Thuật toán Di truyền cho MST</h2>
                <p>Phân tích thế hệ cuối cùng và quá trình hội tụ.</p>
              </div>
              <button className="btn-export">
                <span className="material-symbols-outlined">download</span>
                Export Results
              </button>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Total Weight</p>
                <p className="stat-value">{stats.totalWeight}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Số Lượng Cạnh</p>
                <p className="stat-value">{stats.edgeCount}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Số Thế hệ</p>
                <p className="stat-value">{stats.generations}</p>
              </div>
            </div>

            {/* Visualization & Charts */}
            <div className="charts-grid">
              {/* Left Column: Graph & Table */}
              <div className="charts-left">
                {/* Graph Visualization */}
                <div className="chart-card">
                  <h3 className="card-title">Trực quan hóa Đồ thị và MST</h3>
                  <div
                    className="chart-image graph-image"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAaqwJkatgYuoTd3DGAWLmFVfMdOiUOi2Xl0Won88I4rjUArBLlS0T-bv2t4iMyAYmlJWNmAjD2ezvdmfWjQuvTiQtqbVWN7p56miJX_UbG78ca8VpP8sxLpjT4athx0MBPcPvTV0b7nRsnpf_1LWCzDYf1tELG92SbotTihCyjm1FHu5WbZJA4BJO477lmL5DJNP1GKTLGjERUhSRcJ0lg1KnQkOt0vHXGpqlHYmRtIu3mtBqm5FIoMy8Lj2tv4qb4CEa_kPrt0g")',
                    }}
                  ></div>
                </div>

                {/* Edge List Table */}
                <div className="table-section">
                  <h3 className="card-title">Danh sách Cạnh của MST</h3>
                  <div className="table-container">
                    <table>
                      <thead>
                        <tr>
                          <th>Đỉnh Bắt đầu</th>
                          <th>Đỉnh Kết thúc</th>
                          <th>Trọng số</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>A</td>
                          <td>B</td>
                          <td>4</td>
                        </tr>
                        <tr>
                          <td>B</td>
                          <td>C</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>C</td>
                          <td>D</td>
                          <td>7</td>
                        </tr>
                        <tr>
                          <td>D</td>
                          <td>E</td>
                          <td>9</td>
                        </tr>
                        <tr>
                          <td>E</td>
                          <td>F</td>
                          <td>10</td>
                        </tr>
                        <tr>
                          <td>F</td>
                          <td>G</td>
                          <td>2</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column: Evolution Chart */}
              <div className="charts-right">
                <div className="chart-card h-full">
                  <h3 className="card-title">Biểu đồ Hội tụ</h3>
                  <div
                    className="chart-image evolution-image"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBOUvUuVrXoHaqtVb2TV4Rbk2Rvg-u9BV0GtIfnH9YcGHdBuNe0DkglbxxRw1-b_WoW0MAE60Z-PpSFeg_gSZpGtc0SbT3DOkS497BkrTJ5gnWAYcNA_jZQXgHOw-qe8Aauq62J8ctpHwNjS64omtgVy7j_8hfFxrBKm_w0275XVKs6WiMRS1AeBWOp7t8DXUhdqi5t4CV5wrBkcnzTK_UhFQ47rNg3NW6lNr9REKBMho_uzmrxgVWJmEHf2arCwBkZb5m5uqpCA")',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default KQ;
