import React, { useState, useEffect } from "react"
import { fetchDailyData } from "../../api"
import { Line, Bar } from "react-chartjs-2"
import styles from "./Chart.module.css"

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
          setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])
    const lineChart = dailyData.length ? (
export default Chart