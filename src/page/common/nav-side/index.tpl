<% for (var i =0; i < navList.length; i++) { %>
  <% if (navList[i].isActive) { %>
    <li class="nav-item active">
  <% } else { %> 
    <li class="nav-item">
  <% } %>
    <li class="nav-item active">
    <a class="link" href="<%=navList[i].href  %>"><%=navList[i].desc  %></a>
  </li>
<% } %>