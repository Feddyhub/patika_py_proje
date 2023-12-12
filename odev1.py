sifreler=[1,2,3,'a',[9,8,7]]
print(sifreler)

def flatten(liste):
    new_list=[]
    for value in liste:
      if isinstance(value,list):
          new_list.extend(flatten(value))
      else:
          new_list.append(value)
    return new_list




tum_sifreler=flatten(sifreler)
print(tum_sifreler)




          
            