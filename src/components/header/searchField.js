import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import ScreenSize from '../settings/screenSize';


function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }
  
  const searchResult = query =>
    new Array(getRandomInt(5))
      .join('.')
      .split('.')
      .map((item, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <span>
                Found {query} on{' '}
                <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {category}
                </a>
              </span>
              <span>{getRandomInt(200, 100)} results</span>
            </div>
          ),
        };
      });
  

const SearchField = () => {
const width = ScreenSize();



    const [options, setOptions] = useState([]);

    const handleSearch = value => {
      setOptions(value ? searchResult(value) : []);
    };
  
    const onSelect = value => {
      console.log('onSelect', value);
    };


 


     if (width > 700) {
      return (
 
      <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: width/2
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input size="large" style={{borderRadius: "25px",height:"45px",fontSize:"13px",paddingLeft:"30px"}} placeholder="Welcome ! What are you looking for ?" enterButton />
    </AutoComplete>
      )
      } else {
        return (

    <AutoComplete
    dropdownMatchSelectWidth={252}
    style={{
      width: width/1.068
    }}
    options={options}
    onSelect={onSelect}
    onSearch={handleSearch}
  >
    <Input size="large" style={{borderRadius: "5px",height:"45px",paddingLeft:"10px"}} placeholder="Welcome ! What are you looking for ?" enterButton />
  </AutoComplete>
        )
  }
      

  
};

export default SearchField;