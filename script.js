$(() => {
    const arr = [55, 123, 43, 81, 73];
    d3
        .select('#chart')
        .selectAll('div') // selects all 'future' elements, in this case <p>s
        .data(arr) // D3 data function
        .enter() // enters a placeholder for every value in our array, 5 placeholders
        .append('div')
        .attr('class', 'bar')
        .style('height', d => `${d}px`)
        .text(d => d); // inserts into p tag as iterator
});
