import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
	<div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">Select Your Funds</div>
        <table class="table">
          <tr><th>Fund Name</th><th>E</th><th>S</th><th>G</th><th>C</th></tr>
          <tr><td>IUS-DEFA</td><td>7.31</td><td>4.93</td><td>7.21</td><td>9.28</td></tr>
          <tr><td>IUS-DEZU</td><td>5.1</td><td>4.1</td><td>4.29</td><td>4.15</td></tr>
          <tr><td>IUS-DEWJ</td><td>4.71</td><td>4.18</td><td>3.22</td><td>7.86</td></tr>
          <tr><td>ISIEVLTTL</td><td>4.71</td><td>4.18</td><td>3.22</td><td>7.86</td></tr>
		  <tr><td>ISIEMOTTL</td><td>3.98</td><td>4.31</td><td>4.88</td><td>5.69</td></tr>
		  <tr><td>ISIEQUTTL</td><td>5.77</td><td>4.61</td><td>3.84</td><td>4.82</td></tr>
		  <tr><td>ISIESZTTL</td><td>4.98</td><td>5.37</td><td>6.99</td><td>7.52</td></tr>
		  <tr><td>ISIFSETTL</td><td>5.38</td><td>4.08</td><td>4.54</td><td>3.28</td></tr>
		  <tr><td>I-QAT</td><td>5.03</td><td>4.18</td><td>5.05</td><td>6.94</td></tr>
		  <tr><td>I-UAE</td><td>4.51</td><td>3.76</td><td>5.41</td><td>3.87</td></tr>
		  <tr><td>ISCEMGTTL</td><td>5.72</td><td>3.83</td><td>5.66</td><td>6.31</td></tr>
		  <tr><td>ISHCN_XAW</td><td>5.31</td><td>3.86</td><td>5.93</td><td>9.54</td></tr>
		  <tr><td>IUS-SMLF</td><td>4.33</td><td>3.99</td><td>6.55</td><td>9.01</td></tr>
		  <tr><td>WEBXATS</td><td>6.51</td><td>4.33</td><td>5.22</td><td>2.91</td></tr>
		  <tr><td>IS-CSSMI</td><td>5.16</td><td>4.14</td><td>6.11</td><td>7.37</td></tr>
		  <tr><td>IS-CSSMIM</td><td>5.91</td><td>4.9</td><td>5.2</td><td>4.54</td></tr>
		  <tr><td>IS-CSSLI</td><td>5.7</td><td>2.82</td><td>4.72</td><td>8.93</td></tr>
		  <tr><td>CHDVD</td><td>3.98</td><td>3.44</td><td>3.65</td><td>5.32</td></tr>
		  <tr><td>WEBXCHF</td><td>6.37</td><td>4.48</td><td>5.59</td><td>3.37</td></tr>
		  <tr><td>CHSPI</td><td>2.79</td><td>4.59</td><td>4.38</td><td>2.89</td></tr>
		  <tr><td>I-JPSML</td><td>5.85</td><td>4.19</td><td>4.86</td><td>4.01</td></tr>
		  <tr><td>ISSJPNTTL</td><td>5.67</td><td>5.98</td><td>6.87</td><td>7.02</td></tr>
		  <tr><td>I-MIDVAL</td><td>4.48</td><td>4.87</td><td>5.4</td><td>8.79</td></tr>
        </table>
      </div>
	</div>  
    );
  }
}

export default App;
