<%@ include file="/WEB-INF/template/include.jsp"%>
<%@ include file="/WEB-INF/template/header.jsp"%>

<script data-main="${pageContext.request.contextPath}/moduleResources/angexample/js/main" src="${pageContext.request.contextPath}/moduleResources/angexample/lib/require.js"></script>

<div id="angexampleapp" ng-view>Loading...</div>

<script>
    define('config', [], function() {
      return {
        resourceLocation: '${pageContext.request.contextPath}/moduleResources/angexample',
        contextPath: '${pageContext.request.contextPath}'
      };
    });
</script>

<%@ include file="/WEB-INF/template/footer.jsp"%>