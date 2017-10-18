/**
 * Created by Cassie.Xu on 2017/10/17.
 */
import React, { Component } from 'react';
import * as d3 from 'd3';

class Begin extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount(){
        let dataset = [2.5, 10.5, 4, 2, 1];
        let svg = d3.select('.container')
            .append('svg')
            .attr('width', 300)
            .attr('height', 300)
        let linear = d3.scaleLinear()
            .domain([0, d3.max(dataset)])
            .range([200, 0])
        let ordinal = d3.scaleOrdinal()
            .domain(d3.range(dataset.length))
            .range([0, 200])
        let yAxis = d3.axisLeft()
            .scale(linear)
            .ticks(5)
        let xAxis = d3.axisBottom()
            .scale(ordinal)
        svg.selectAll('rect')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('x', function (d, i) {
                return 50 + i * 25
            })
            .attr('y', function (d, i) {
                return linear(d)
            })
            .attr('width', 20)
            .attr('height', function (d) {
                return 200 - linear(d)
            })
        svg.append('g')
            .call(yAxis)
            .attr("transform","translate(40,0)")
        svg.append('g')
            .call(xAxis)

    }

    render(){

        return (
            <div className="container">
            </div>
        );
    }
}

export default Begin