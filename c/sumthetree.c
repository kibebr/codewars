#define NULL 0

typedef struct node{
  int value;
  struct node* left;
  struct node* right;
} node;


int sumTheTreeValues(struct node* root){
  if(root == NULL)
    return -1;

  int total = 0;

  total += (*root).value;

  for(node *leftnode = (*root).left; leftnode != NULL; leftnode = (*leftnode).left) 
    total += (*leftnode).value;
  for(node *rightnode = (*root).right; rightnode != NULL; rightnode = (*rightnode).right)
    total += (*rightnode).value;
  
  return total;
}
