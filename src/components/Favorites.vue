<template>
    <div class="container">
      <header class="header" :style="{ backgroundColor: '#4CAF50', borderRadius: '0 0 10px 10px' }">
        <h1 class="title" style="color: #FFF; fontWeight: semi-bold; fontSize: 25px;">그룹</h1>
        <div class="search-bar">
          <input
            type="text"
            v-model="searchQuery"
            placeholder="이름 또는 전화번호 검색"
            class="search-input"
            :style="{ backgroundColor: '#B9B1BE' }"
          />
        </div>
      </header>
  
      <div class="categories">
        <div class="category" v-for="(contacts, group) in groupedContacts" :key="group">
          <h2 class="category-title">{{ group }}</h2>
          <ul>
            <li class="list-item" v-for="contact in contacts" :key="contact.id">
              <div class="info">
                <span class="name">{{ contact.name }}</span>
                <span class="phoneNumber">{{ contact.phone }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </template>
  
  <script setup>
  import { reactive, ref, computed } from 'vue';
  
  // 연락처 데이터
  const contacts = reactive([
    { id: 1, name: 'John Doe', phone: '123-456-7890', group: 'Family', profilePicture: '' },
    { id: 2, name: 'Jane Smith', phone: '987-654-3210', group: 'Friends', profilePicture: '' },

  ]);
  
  // 검색어
  const searchQuery = ref('');
  
  // 검색된 연락처
  const filteredContacts = computed(() => {
    const lowerCaseSearchQuery = searchQuery.value.toLowerCase();
    return contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(lowerCaseSearchQuery) ||
        contact.phone.includes(lowerCaseSearchQuery)
      );
    });
  });
  
  // 그룹별 연락처
  const groupedContacts = computed(() => {
    return filteredContacts.value.reduce((groups, contact) => {
      const group = contact.group || 'Others';
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(contact);
      return groups;
    }, {});
  });
  </script>
  
  <style scoped>

  .header {
    display: flex;
    flex-direction: column; /* 세로로 정렬 */
    align-items: center;
    padding: 20px;
    color: #4CAF50;
    border-radius: 0 0 10px 10px; /* 아래쪽 모서리만 둥글게 설정 */
  }
  
  .back-button {
    align-self: flex-start; /* 왼쪽 상단으로 정렬 */
    margin-bottom: 10px;
    cursor: pointer;
  }
  
  .title {
    font-weight: bold;
    font-size: 24px;
    color: #fdfdfd; 
    margin-bottom: 10px;
  }
  
  .search-bar {
    width: 100%;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    font-size: 16px;
  }
  

  .categories {
    margin-bottom: 20px;
    padding: 0 20px;
  }
  
  .category {
    margin-bottom: 20px;
  }
  
  .category-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #FFFFFF; /* 배경색 */
    color: #000000; /* 글자 색상 */
  }
  
  .groups {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .group {
    flex-basis: calc(50% - 10px);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px; /* 전체 모서리 둥글게 설정 */
    cursor: pointer;
    text-align: center;
    font-size: 18px;
    color: #4CAF50;
    font-weight: semi-bold;
  }
  
  /* 연락처 목록 */
  .list {
    padding: 20px;
    text-align: left; /* 왼쪽 정렬 */
  }
  
  .list-item {
    display: flex;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #CCCCCC;
  }
  
  .info {
    flex: 1;
    display: flex;
    align-items: center;
  }
  
  .name {
    font-size: 16px;
    margin-right: 10px; /* 이름과 전화번호 사이에 간격 추가 */
  }
  
  .phoneNumber {
    font-size: 16px;
  }
  
  /* 스크롤바 */
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #F2F2F2;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #CCCCCC;
    border-radius: 10px;
  }
  </style>
  