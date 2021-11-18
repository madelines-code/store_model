class StoresController < ApplicationController

  #(R)ead
  def index
    # get all stores 
    # render stores
    render component: "Stores", props: {stores: Store.all}
  end
 # render componenet : "file looking for", props (information you are sending) :{how you are going to refer to the info: Infomation you are sending (ususally form a model)}
  def show
    
    #f ind store and show it (1 user by id)
    # render store
    render component: "Store", props: {store: (find_store)}
  end

  #(C)reate
  def new
    # render new form
    render component: "newStore"
  end

  def create
    # create store to our db
    Store.create(name: params[:store][:name])
    redirect_to root_path
  end


  def stores_params
    params.require(:store).permit(:name)
  end


 # (U)pdate
  # edit returns the form to user/client
 def edit
  render component: "StoreEdit", props: { store: (find_store) }
end

# # update takes values from form and updates the record
def update
 
  if (find_store).update(stores_params)
    # this will take us to our index method
    redirect_to root_path
  else
    render component: "storeEdit", props: { store: (find_store) }
  end
end

  #(D)elete
  def destroy
    # find store to Delete
    # Delete
    # add delete buttom to stores
    (find_store).destroy
    redirect_to root_path
  end


#   private

  def find_store
    @store = Store.find(params[:id])
  end




end
